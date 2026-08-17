// dsh-ui-tweaks host half: serves the current DeepSeek account balance and
// subagent usage aggregates to the browser over small same-origin HTTP routes.
// The API key never leaves the host process.
import { credentialRef } from '@deepseek-ai/dsh-credentials';

export const inject = ['webServer', 'credentials'];

const BALANCE_PATH = '/dsh-ui-tweaks/balance';
const SUBAGENT_USAGE_PATH = '/dsh-ui-tweaks/subagent-usage';

function sendJson(res, status, payload) {
  const body = JSON.stringify(payload);
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    'Content-Length': Buffer.byteLength(body),
  });
  res.end(body);
}

/** Extract only the billing-relevant request facts from a child session log. */
function requestsFromEvents(events) {
  const requests = [];
  let currentHeader = null;
  let currentContext = null;
  for (const event of events) {
    if (event.type === 'request/header') {
      currentHeader = event.data?.header ?? null;
    } else if (event.type === 'request/context') {
      currentContext = event.data ?? null;
    } else if (event.type === 'assistant/message') {
      const usage = event.data?.usage;
      if (!usage) continue;
      const config = currentHeader?.config;
      const provider = config?.provider ?? currentContext?.provider;
      const model = config?.model ?? currentContext?.model;
      requests.push({
        startSeq: event.seq,
        startedAt: event.time,
        completedAt: event.time,
        ...(provider !== undefined || model !== undefined
          ? {
            provenance: { provider, model },
            requestConfig: { provider, model },
          }
          : {}),
        usage,
      });
    } else if (event.type === 'compaction/summary') {
      const usage = event.data?.usage;
      if (!usage) continue;
      const provider = event.data?.provider;
      const model = event.data?.model;
      requests.push({
        startSeq: event.seq,
        startedAt: event.time,
        completedAt: event.time,
        provenance: { provider, model },
        requestConfig: { provider, model, purpose: 'compaction' },
        purpose: 'compaction',
        usage,
      });
    }
  }
  return requests;
}

/** Read one subagent's events and creation time from the live store or cold persistence. */
async function readSessionEvents(ctx, sessionId) {
  const sessions = ctx.get('sessions');
  const live = sessions?.get?.(sessionId);
  if (live) return { events: live.events, createdAt: live.header?.createdAt };
  const persistence = ctx.get('sessionPersistence');
  if (persistence && typeof persistence.inspect === 'function') {
    try {
      const inspected = await persistence.inspect(sessionId);
      return inspected ? { events: inspected.events, createdAt: inspected.meta?.createdAt } : null;
    } catch {
      return null;
    }
  }
  return null;
}

async function handleSubagentUsage(ctx, req, res) {
  const subagents = ctx.get('subagents');
  if (!subagents || (typeof subagents.listDescendants !== 'function' && typeof subagents.listChildren !== 'function')) {
    sendJson(res, 200, { error: 'unavailable' });
    return;
  }
  const listDescendants = typeof subagents.listDescendants === 'function'
    ? (sessionId) => subagents.listDescendants(sessionId)
    : async (sessionId) => {
      const children = await subagents.listChildren(sessionId);
      return children.map((entry) => ({ ...entry, parentId: sessionId, depth: 1 }));
    };

  const url = new URL(req.url, 'http://dsh-ui-tweaks.local');
  const parentSessionId = url.searchParams.get('sessionId');
  if (!parentSessionId) {
    sendJson(res, 400, { error: 'missing-session' });
    return;
  }

  try {
    const descendants = await listDescendants(parentSessionId);
    const result = [];
    for (const entry of descendants) {
      if (entry.kind !== 'child') continue;
      const read = await readSessionEvents(ctx, entry.id);
      if (read === null) continue;
      result.push({
        id: entry.id,
        label: entry.label ?? entry.id,
        mode: entry.mode,
        parentId: entry.parentId,
        depth: entry.depth,
        createdAt: read.createdAt,
        requests: requestsFromEvents(read.events),
      });
    }
    sendJson(res, 200, { ok: true, subagents: result });
  } catch (error) {
    sendJson(res, 500, {
      error: error instanceof Error ? error.message : String(error),
    });
  }
}

export function apply(ctx) {
  ctx.effect(() => ctx.webServer.register({
    kind: 'exact',
    path: BALANCE_PATH,
    handler: async (req, res) => {
      try {
        const cred = await ctx.credentials.resolve(credentialRef('DEEPSEEK_API_KEY'));
        if (!cred) {
          sendJson(res, 200, { error: 'missing-key' });
          return;
        }

        const upstream = await fetch('https://api.deepseek.com/user/balance', {
          headers: {
            Authorization: `Bearer ${cred.value}`,
            Accept: 'application/json',
          },
        });

        const text = await upstream.text();
        let data;
        try {
          data = text === '' ? {} : JSON.parse(text);
        } catch {
          data = { raw: text };
        }

        sendJson(res, upstream.status, data);
      } catch (error) {
        sendJson(res, 500, {
          error: error instanceof Error ? error.message : String(error),
        });
      }
    },
  }), 'dsh-ui-tweaks: balance route');

  ctx.effect(() => ctx.webServer.register({
    kind: 'exact',
    path: SUBAGENT_USAGE_PATH,
    handler: (req, res) => handleSubagentUsage(ctx, req, res),
  }), 'dsh-ui-tweaks: subagent usage route');
}
