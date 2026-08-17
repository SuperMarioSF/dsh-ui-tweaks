// dsh-ui-tweaks host half: serves the current DeepSeek account balance to the
// browser over a small same-origin HTTP route, using the already-configured
// DEEPSEEK_API_KEY credential. No secret ever leaves the host process.
import { credentialRef } from '@deepseek-ai/dsh-credentials';

export const inject = ['webServer', 'credentials'];

const BALANCE_PATH = '/dsh-ui-tweaks/balance';

function sendJson(res, status, payload) {
  const body = JSON.stringify(payload);
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    'Content-Length': Buffer.byteLength(body),
  });
  res.end(body);
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
}
