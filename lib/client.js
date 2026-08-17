window.__ModuleLoader__.load({
	id: "dsh-ui-tweaks",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

		var React = require("react");

		const STYLE_ID = "dsh-ui-tweaks-style";
		const CSS = `
.dsh-ui-balance-wrap{position:relative;display:inline-flex}
.dsh-ui-balance{display:inline-flex;align-items:center;height:28px;padding:0 10px;border-radius:999px;background:var(--dsw-alias-interactive-bg-hover);color:var(--dsw-alias-label-secondary);font:var(--dsw-font-xs-13);white-space:nowrap;user-select:none;border:0;cursor:pointer}
.dsh-ui-balance:hover{background:var(--dsw-alias-interactive-bg-hover-solid);color:var(--dsw-alias-label-primary)}
.dsh-ui-balance-error{color:var(--dsw-alias-state-error-primary)}
.dsh-ui-balance-popup{position:absolute;top:calc(100% + 8px);right:0;z-index:100;box-sizing:border-box;width:540px;max-width:92vw;border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-specific-menu,var(--dsw-alias-bg-layer-2));box-shadow:var(--dsw-shadow-lv3);color:var(--dsw-alias-label-primary);border-radius:12px;padding:12px;font-size:12px;line-height:18px}
.dsh-ui-balance-popup-header{font-weight:500;margin-bottom:8px}
.dsh-ui-balance-popup-warning{color:var(--dsw-alias-state-error-primary);font-size:11px;line-height:16px;margin:0}
.dsh-ui-balance-popup-empty{color:var(--dsw-alias-label-tertiary);padding:8px 0}
.dsh-ui-usage-table{width:100%;border-collapse:collapse;font-variant-numeric:tabular-nums}
.dsh-ui-usage-table th,.dsh-ui-usage-table td{text-align:right;padding:5px 6px;white-space:nowrap;border-bottom:1px solid var(--dsw-alias-border-l1)}
.dsh-ui-usage-table th:first-child,.dsh-ui-usage-table td:first-child{text-align:left}
.dsh-ui-usage-table th:nth-child(2),.dsh-ui-usage-table td:nth-child(2){text-align:center}
.dsh-ui-usage-table thead th{color:var(--dsw-alias-label-tertiary);background:var(--dsw-alias-bg-layer-1);font-weight:500}
.dsh-ui-usage-table thead tr:first-child th{border-bottom:1px solid var(--dsw-alias-border-l2)}
.dsh-ui-usage-table thead tr:last-child th{font-weight:400;color:var(--dsw-alias-label-caption)}
.dsh-ui-usage-table tbody tr:hover{background:var(--dsw-alias-interactive-bg-hover)}
.dsh-ui-usage-table th:nth-child(3),.dsh-ui-usage-table td:nth-child(3),.dsh-ui-usage-table th:nth-child(4),.dsh-ui-usage-table td:nth-child(4),.dsh-ui-usage-table th:nth-child(5),.dsh-ui-usage-table td:nth-child(5){width:90px}
.dsh-ui-usage-table th:last-child,.dsh-ui-usage-table td:last-child{width:80px}
.dsh-ui-usage-subcost{color:var(--dsw-alias-label-tertiary);font-size:11px;line-height:14px;margin-top:1px}
.dsh-ui-peak{color:color-mix(in srgb, var(--dsw-alias-state-error-primary) 45%, var(--dsw-alias-label-primary))}
.dsh-ui-offpeak{color:color-mix(in srgb, var(--dsw-alias-state-success-primary) 45%, var(--dsw-alias-label-primary))}
.dsh-ui-request-section{margin-top:10px;border-top:1px solid var(--dsw-alias-border-l1);max-height:40vh;overflow-y:auto;overflow-x:auto}
.dsh-ui-balance-popup-toggle{height:24px;color:var(--dsw-alias-label-secondary);cursor:pointer;background:0 0;border:0;border-radius:6px;padding:0 8px;font-size:12px}
.dsh-ui-balance-popup-toggle:hover{color:var(--dsw-alias-label-primary);background:var(--dsw-alias-interactive-bg-hover)}
.dsh-ui-request-table{width:100%;border-collapse:collapse;font-variant-numeric:tabular-nums}
.dsh-ui-request-table th,.dsh-ui-request-table td{text-align:right;padding:3px 4px;white-space:nowrap;font-size:11px;line-height:15px;border-bottom:1px solid var(--dsw-alias-border-l1)}
.dsh-ui-request-table th:first-child,.dsh-ui-request-table td:first-child{text-align:left}
.dsh-ui-request-table th:nth-child(3),.dsh-ui-request-table td:nth-child(3){text-align:center}
.dsh-ui-request-table th{position:sticky;top:0;z-index:1;color:var(--dsw-alias-label-caption);font-weight:400;background:var(--dsw-alias-bg-layer-1)}
.dsh-ui-request-table tbody tr:hover{background:var(--dsw-alias-interactive-bg-hover)}
.dsh-ui-request-table th:first-child,.dsh-ui-request-table td:first-child{width:100px;overflow:hidden;text-overflow:ellipsis}
.dsh-ui-request-table th:nth-child(2),.dsh-ui-request-table td:nth-child(2){width:120px;overflow:hidden;text-overflow:ellipsis}
.dsh-ui-request-table th:nth-child(3),.dsh-ui-request-table td:nth-child(3){width:40px}
.dsh-ui-request-table th:nth-child(4),.dsh-ui-request-table td:nth-child(4),.dsh-ui-request-table th:nth-child(5),.dsh-ui-request-table td:nth-child(5),.dsh-ui-request-table th:nth-child(6),.dsh-ui-request-table td:nth-child(6){width:60px}
.dsh-ui-request-table th:last-child,.dsh-ui-request-table td:last-child{width:60px}
.dsh-ui-request-table{table-layout:fixed}
.dsh-ui-subagent-toggle{min-width:20px;height:20px;flex:none;display:inline-flex;align-items:center;justify-content:center;color:var(--dsw-alias-label-secondary);cursor:pointer;background:0 0;border:0;border-radius:6px;padding:0;font-size:12px;white-space:nowrap}
.dsh-ui-subagent-toggle:hover{color:var(--dsw-alias-label-primary);background:var(--dsw-alias-interactive-bg-hover)}
.dsh-ui-subagent-cell-inner{display:flex;align-items:center;justify-content:space-between;gap:8px;min-width:0}
.dsh-ui-subagent-title{display:inline-flex;align-items:center;justify-content:flex-end;gap:4px;min-width:0;text-align:right}
.dsh-ui-subagent-prefix{font-size:10px;line-height:14px;color:var(--dsw-alias-label-tertiary);flex:none}
.dsh-ui-subagent-label{max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;vertical-align:bottom}
.dsh-ui-request-subagent-row td{background:var(--dsw-alias-bg-layer-1)}
.dsh-ui-request-subagent-detail-row td{padding:0!important;border-bottom:0!important;background:var(--dsw-alias-bg-layer-1)}
.dsh-ui-request-subagent-detail{padding:8px;border-top:1px solid var(--dsw-alias-border-l1);max-width:100%;box-sizing:border-box}
.dsh-ui-subagent-box{width:100%;max-width:100%;box-sizing:border-box;overflow-x:auto}
.dsh-ui-subagent-item{border-radius:6px}
.dsh-ui-subagent-item-header{display:flex;align-items:center;gap:8px;padding:4px 6px;border-radius:6px}
.dsh-ui-subagent-item-header:hover{background:var(--dsw-alias-interactive-bg-hover)}
.dsh-ui-subagent-item-time{color:var(--dsw-alias-label-tertiary);font-size:11px;line-height:14px;white-space:nowrap;flex:none}
.dsh-ui-subagent-item-name{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--dsw-alias-label-primary);text-align:right}
.dsh-ui-subagent-item-cost{color:var(--dsw-alias-label-secondary);white-space:nowrap;flex:none}
.dsh-ui-subagent-detail{padding:0 6px 6px;overflow-x:auto}
.dsh-ui-subagent-children{margin-top:6px;padding-left:12px;border-left:1px solid var(--dsw-alias-border-l1)}
.dsh-ui-subagent-table{width:100%;max-width:100%;table-layout:fixed;margin:6px 0 4px;background:var(--dsw-alias-bg-layer-2);border-radius:8px}
.dsh-ui-subagent-table th:first-child,.dsh-ui-subagent-table td:first-child{width:120px;overflow:hidden;text-overflow:ellipsis}
.dsh-ui-subagent-table th:nth-child(2),.dsh-ui-subagent-table td:nth-child(2){width:40px}
.dsh-ui-subagent-table th:nth-child(3),.dsh-ui-subagent-table td:nth-child(3),.dsh-ui-subagent-table th:nth-child(4),.dsh-ui-subagent-table td:nth-child(4),.dsh-ui-subagent-table th:nth-child(5),.dsh-ui-subagent-table td:nth-child(5){width:70px}
.dsh-ui-subagent-table th:last-child,.dsh-ui-subagent-table td:last-child{width:64px}
.dsh-ui-balance-popup-footer{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:10px}
.dsh-ui-balance-popup-total{color:var(--dsw-alias-label-secondary)}
.dsh-ui-balance-popup-total-group{display:flex;align-items:center;gap:8px;min-width:0}
.dsh-ui-balance-popup-actions{display:flex;align-items:center;gap:6px}
.dsh-ui-balance-popup-refresh{height:24px;color:var(--dsw-alias-label-primary);cursor:pointer;background:var(--dsw-alias-interactive-bg-hover);border:0;border-radius:6px;padding:0 10px;font-size:12px}
.dsh-ui-balance-popup-refresh:hover{background:var(--dsw-alias-interactive-bg-hover-solid)}
.dsh-ui-trajectory-follow{height:20px;color:var(--dsw-alias-label-tertiary);cursor:pointer;font:var(--dsw-font-xxs-12);background:0 0;border:0;border-radius:3px;flex:none;align-items:center;gap:4px;padding:0 7px;display:inline-flex}
.dsh-ui-trajectory-follow:hover{color:var(--dsw-alias-label-primary);background:var(--dsw-alias-interactive-bg-hover)}
.dsh-ui-trajectory-follow[aria-pressed=true]{color:var(--dsw-alias-state-business-primary);background:var(--dsw-alias-interactive-bg-hover)}
.dsh-ui-context-text{color:var(--dsw-alias-label-tertiary);font:var(--dsw-font-xs-13);line-height:20px;white-space:nowrap;flex:none;align-self:center;margin-left:-6px}
.QWLzlG_root:not([data-user-collapsed]):not([data-user-expanded]) .QWLzlG_thinkBody{max-height:120px;overflow-y:auto;overflow-anchor:none}
.QWLzlG_root[data-user-expanded] .QWLzlG_thinkBody{max-height:none;overflow:visible}
.wSkVaW_header{display:flex;align-items:center;gap:12px;padding:8px 20px 10px !important}
.wSkVaW_titleRow{flex:1;min-width:0}
.wSkVaW_tabs{margin-top:0 !important;padding-left:0 !important;gap:20px;flex:none}
.wSkVaW_tab{padding-bottom:0}
.wSkVaW_tab:after{bottom:-1px}
@media (min-width:1200px){.wSkVaW_root{--dsh-chat-content-width:860px !important}}
`;

		function ensureStyles() {
			if (document.getElementById(STYLE_ID)) return;
			const style = document.createElement("style");
			style.id = STYLE_ID;
			style.setAttribute("data-plugin", "dsh-ui-tweaks");
			style.textContent = CSS;
			document.head.appendChild(style);
		}

		function isVisible(el) {
			return !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
		}

		function formatTokens(n) {
			const scaled = (v) => v >= 100 ? String(Math.round(v)) : String(Math.round(v * 10) / 10);
			if (n < 1e3) return String(n);
			if (n < 1e6) return `${scaled(n / 1e3)}K`;
			return `${scaled(n / 1e6)}M`;
		}

		function updateTokenStats(ctx) {
			const roots = document.querySelectorAll(".FJxK0a_root");
			if (roots.length === 0) return;
			const state = ctx.sessions.list.getSnapshot();
			const current = state.current;
			if (!current) return;
			const binding = ctx.sessions.binding(current);
			if (!binding) return;
			const face = binding.session.projections.faceOf("tokenUsage");
			const usage = face?.getSnapshot();
			if (!usage) return;
			const effectiveInput = usage.uncachedInputTokens ?? 0;
			const rawInput = effectiveInput + (usage.cacheReadTokens ?? 0) + (usage.cacheWriteTokens ?? 0);
			const output = usage.outputTokens ?? 0;
			const zhLabel = `tok 输入 ${formatTokens(rawInput)} · 有效 ${formatTokens(effectiveInput)} · 输出 ${formatTokens(output)}`;
			const enLabel = `tok Input ${formatTokens(rawInput)} · Effective ${formatTokens(effectiveInput)} · Output ${formatTokens(output)}`;
			for (const root of roots) {
				for (const span of root.querySelectorAll("span")) {
					if (span.children.length > 0) continue;
					const text = (span.textContent ?? "").trim();
					if (/^(输入|有效输入) .* tok · 输出 .* tok$/.test(text)) {
						if (span.textContent !== zhLabel) span.textContent = zhLabel;
					} else if (/^(Input|Effective input) .* tok · Output .* tok$/.test(text)) {
						if (span.textContent !== enLabel) span.textContent = enLabel;
					}
				}
			}
		}

		let statsUpdating = false;
		function refreshTokenStats(ctx) {
			if (statsUpdating) return;
			statsUpdating = true;
			try {
				updateTokenStats(ctx);
			} finally {
				statsUpdating = false;
			}
		}

		function updateContextMeter(ctx) {
			const roots = document.querySelectorAll(".JObwrW_root");
			if (roots.length === 0) return;
			const state = ctx.sessions.list.getSnapshot();
			const current = state.current;
			if (!current) return;
			const binding = ctx.sessions.binding(current);
			if (!binding) return;
			const face = binding.session.projections.faceOf("contextPressure");
			const pressure = face?.getSnapshot();
			const used = pressure?.projectedTokens ?? pressure?.pressureTokens;
			const total = pressure?.contextWindow;
			const label = used !== void 0 && total !== void 0
				? `~${formatTokens(used)} / ${formatTokens(total)}`
				: null;
			for (const root of roots) {
				const parent = root.parentElement;
				if (!parent) continue;
				let text = parent.querySelector(":scope > .dsh-ui-context-text");
				if (!text) {
					text = document.createElement("span");
					text.className = "dsh-ui-context-text";
					root.insertAdjacentElement("afterend", text);
				}
				if (label === null) {
					text.hidden = true;
				} else {
					text.hidden = false;
					if (text.textContent !== label) text.textContent = label;
				}
			}
		}

		let programmaticClickDepth = 0;
		let trackingEnabled = false;
		let sidebarAutoCollapsed = false;
		let lastChatUserScroll = 0;
		let lastAutoScrollState = true;
		let clientCtx = null;
		let balanceCache = null;
		const headerEpochsBySession = new Map();
		const seenThinkRoots = new WeakMap();
		try {
			trackingEnabled = localStorage.getItem("dsh-ui-trajectory-follow") === "1";
		} catch {
			trackingEnabled = false;
		}

		function clickElement(el) {
			programmaticClickDepth++;
			try {
				el.click();
			} finally {
				programmaticClickDepth--;
			}
		}

		function isOutOfViewport(element) {
			const rect = element.getBoundingClientRect();
			const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
			return rect.bottom < 0 || rect.top > viewportHeight;
		}

		function isChatAutoScrolling() {
			const scroller = document.querySelector(".Md3f7G_scroll");
			if (!scroller) return true;
			return scroller.scrollHeight - scroller.scrollTop - scroller.clientHeight <= 25;
		}

		function restoreChatAutoScroll() {
			const button = document.querySelector(".Md3f7G_toBottom");
			if (button) {
				button.click();
				return;
			}
			const scroller = document.querySelector(".Md3f7G_scroll");
			if (scroller) scroller.scrollTop = scroller.scrollHeight;
		}

		function updateThinkAutoScrollState() {
			const scroller = document.querySelector(".Md3f7G_scroll");
			lastAutoScrollState = scroller
				? scroller.scrollHeight - scroller.scrollTop - scroller.clientHeight <= 25
				: true;
			const roots = document.querySelectorAll('[data-variant="think"]');
			for (const root of roots) {
				let info = seenThinkRoots.get(root);
				const body = root.querySelector(".QWLzlG_thinkBody");
				const text = body ? (body.textContent ?? "") : "";
				if (!info) {
					info = {
						wasAutoScroll: lastAutoScrollState,
						sawFirstLine: text.trim() !== ""
					};
					seenThinkRoots.set(root, info);
					if (info.sawFirstLine && info.wasAutoScroll) restoreChatAutoScroll();
				} else if (!info.sawFirstLine && text.trim() !== "") {
					info.sawFirstLine = true;
					if (info.wasAutoScroll) restoreChatAutoScroll();
				}
			}
		}

		function autoManageThinking() {
			const roots = document.querySelectorAll('[data-variant="think"]');
			for (const root of roots) {
				const row = root.querySelector("[data-disclosure-row]");
				if (!row) continue;
				const running = root.getAttribute("data-state") === "running";
				const open = root.querySelector(".QWLzlG_thinkBody") !== null;
				const outOfView = isOutOfViewport(root);
				if (running) {
					if (!open && !root.hasAttribute("data-user-collapsed") && !outOfView) {
						clickElement(row);
					}
					if (open && outOfView) {
						clickElement(row);
					}
					if (open) {
						const body = root.querySelector(".QWLzlG_thinkBody");
						if (body && body.scrollHeight - body.scrollTop - body.clientHeight > 1) {
							body.scrollTop = body.scrollHeight;
						}
					}
				} else if (open && outOfView) {
					clickElement(row);
				}
			}
		}

		function expandToolRoot(root) {
			let row = root.matches("[data-expandable], [aria-expanded]") ? root : root.querySelector("[data-expandable], [aria-expanded]");
			if (!row) return;
			if (row.getAttribute("aria-expanded") === "true") return;
			clickElement(row);
		}

		function autoExpandTools() {
			const roots = document.querySelectorAll('[data-tool], [data-sample="bash"]');
			for (const root of roots) expandToolRoot(root);
		}

		function ensureTrajectoryToggle() {
			const toolbar = document.querySelector(".fV0t5q_inner");
			if (!toolbar) return;
			const actions = toolbar.querySelector(".fV0t5q_actions");
			if (!actions) return;
			if (actions.querySelector(".dsh-ui-trajectory-follow")) return;
			const button = document.createElement("button");
			button.type = "button";
			button.className = "fV0t5q_action dsh-ui-trajectory-follow";
			button.setAttribute("aria-pressed", String(trackingEnabled));
			button.title = "追踪最新进度";
			button.textContent = "追踪";
			button.addEventListener("click", () => {
				trackingEnabled = !trackingEnabled;
				try {
					localStorage.setItem("dsh-ui-trajectory-follow", trackingEnabled ? "1" : "0");
				} catch {
					// ignore storage failures
				}
				button.setAttribute("aria-pressed", String(trackingEnabled));
			});
			actions.appendChild(button);
		}

		function clickDetailTab(id) {
			const tab = document.getElementById(`trajectory-detail-${id}`);
			if (tab && tab.getAttribute("aria-selected") !== "true") clickElement(tab);
		}

		function trackingTick() {
			if (!trackingEnabled) return;
			const pane = document.querySelector(".Y0dWHa_tablePane");
			if (!pane || !isVisible(pane)) return;
			pane.scrollTop = pane.scrollHeight;

			const rows = Array.from(pane.querySelectorAll('tbody tr[data-kind]')).filter((tr) => {
				const kind = tr.getAttribute("data-kind");
				return kind && !tr.hasAttribute("data-collapsed-summary") && !tr.hasAttribute("data-request-only");
			});
			const latest = rows[rows.length - 1];
			if (!latest) return;

			if (latest.getAttribute("data-selected") !== "true") clickElement(latest);

			const kind = latest.getAttribute("data-kind");
			const running = latest.hasAttribute("data-running");
			if (kind === "message") {
				clickDetailTab("rendered");
				const panel = document.getElementById("trajectory-detail-panel");
				if (panel) {
					const thinkingToggle = panel.querySelector(".Y0dWHa_thinkingToggle");
					if (thinkingToggle && thinkingToggle.getAttribute("aria-expanded") !== "true") {
						clickElement(thinkingToggle);
					}
					panel.scrollTop = panel.scrollHeight;
				}
			} else if (kind === "tool" || kind === "subtool") {
				if (running) clickDetailTab("input");
				else clickDetailTab("output");
				const panel = document.getElementById("trajectory-detail-panel");
				if (panel) panel.scrollTop = panel.scrollHeight;
			}
		}

		function resumeChatAutoScroll(ctx) {
			const button = document.querySelector(".Md3f7G_toBottom");
			if (!button) return;
			if (Date.now() - lastChatUserScroll < 3000) return;
			const state = ctx.sessions.list.getSnapshot();
			const current = state.current;
			if (!current) return;
			const binding = ctx.sessions.binding(current);
			if (!binding) return;
			if (!binding.session.getSnapshot().running) return;
			button.click();
		}

		function onDocumentClick(event, ctx) {
			if (programmaticClickDepth > 0) return;
			if (!event.isTrusted) return;
			const target = event.target;
			if (!(target instanceof Element)) return;

			const thinkRow = target.closest('[data-variant="think"] [data-disclosure-row]');
			if (thinkRow) {
				const root = thinkRow.closest('[data-variant="think"]');
				if (root && root.getAttribute("data-state") === "running") {
					const wasOpen = thinkRow.getAttribute("aria-expanded") === "true";
					if (wasOpen) {
						root.setAttribute("data-user-collapsed", "");
						root.removeAttribute("data-user-expanded");
					} else {
						root.setAttribute("data-user-expanded", "");
						root.removeAttribute("data-user-collapsed");
					}
				}
			}

			const sidebarToggle = target.closest(".hHd-Xa_toggle");
			if (sidebarToggle) {
				const label = sidebarToggle.getAttribute("aria-label") ?? "";
				if (label.includes("打开") || label.includes("Open")) {
					sidebarAutoCollapsed = true;
				}
			}
			const sidebarRow = target.closest(".YDXeBa_sessionRow, .YDXeBa_searchResultRow");
			if (sidebarRow) sidebarAutoCollapsed = true;
		}

		const PRICING = {
			"deepseek-v4-flash": {
				peak: { cacheHit: 0.10, cacheMiss: 3.0, output: 9.0 },
				off: { cacheHit: 0.05, cacheMiss: 1.5, output: 4.5 }
			},
			"deepseek-v4-pro": {
				peak: { cacheHit: 0.30, cacheMiss: 9.0, output: 27.0 },
				off: { cacheHit: 0.15, cacheMiss: 4.5, output: 13.5 }
			}
		};
		// 2026-08-17 00:00 Beijing = 2026-08-16 16:00 UTC
		const NEW_PRICING_EFFECTIVE_AT = Date.UTC(2026, 7, 16, 16, 0, 0);
		// Ordered oldest → newest. Each entry applies from `effectiveAt` onward.
		// Future price changes: append a new entry with its own `effectiveAt`.
		const PRICING_SCHEDULES = [
			{
				effectiveAt: 0,
				peakWindows: [{ start: 9, end: 12 }, { start: 14, end: 18 }],
				prices: {
					"deepseek-v4-flash": {
						off: { cacheHit: 0.02, cacheMiss: 1.0, output: 2.0 },
						peak: { cacheHit: 0.04, cacheMiss: 2.0, output: 4.0 }
					},
					"deepseek-v4-pro": {
						off: { cacheHit: 0.025, cacheMiss: 3.0, output: 6.0 },
						peak: { cacheHit: 0.05, cacheMiss: 6.0, output: 12.0 }
					}
				}
			},
			{
				effectiveAt: NEW_PRICING_EFFECTIVE_AT,
				peakWindows: [{ start: 9, end: 12 }, { start: 14, end: 18 }],
				prices: PRICING
			}
		];

		function priceFor(model, timestamp, period) {
			const time = timestamp ?? Date.now();
			for (const entry of PRICING_SCHEDULES) {
				if (time < entry.effectiveAt) continue;
				const prices = entry.prices[model];
				if (!prices) return undefined;
				return prices[period];
			}
			return undefined;
		}

		function normalizeModel(model) {
			if (!model) return "unknown";
			const value = String(model).toLowerCase();
			if (value.includes("deepseek-v4-flash") || value.includes("v4-flash")) return "deepseek-v4-flash";
			if (value.includes("deepseek-v4-pro") || value.includes("v4-pro")) return "deepseek-v4-pro";
			return model;
		}

		function scheduleFor(timestamp) {
			const time = timestamp ?? Date.now();
			let current = PRICING_SCHEDULES[0];
			for (const entry of PRICING_SCHEDULES) {
				if (time < entry.effectiveAt) break;
				current = entry;
			}
			return current;
		}

		function isPeakPeriod(timestamp, peakWindows) {
			const hour = new Date(timestamp).getHours();
			return peakWindows.some((window) => hour >= window.start && hour < window.end);
		}

		function periodForRequest(request) {
			const time = request.startedAt ?? request.completedAt ?? Date.now();
			const schedule = scheduleFor(time);
			return isPeakPeriod(time, schedule.peakWindows) ? "peak" : "off";
		}

		function usageOfRequest(request) {
			const usage = request.usage;
			if (!usage || typeof usage !== "object") return null;
			const uncached = usage.uncachedInputTokens ?? usage.inputTokens ?? 0;
			const cacheRead = usage.cacheReadTokens ?? 0;
			const cacheWrite = usage.cacheWriteTokens ?? 0;
			const output = usage.outputTokens ?? 0;
			return { uncached, cacheRead, cacheWrite, output };
		}

		function computeSessionUsage(requests) {
			const rows = [];
			const index = new Map();
			for (const request of requests) {
				const usage = usageOfRequest(request);
				if (!usage) continue;
				const model = normalizeModel(request.provenance?.model ?? request.requestConfig?.model);
				const time = request.startedAt ?? request.completedAt ?? Date.now();
				const period = periodForRequest(request);
				const key = `${model}\u0000${period}`;
				let row = index.get(key);
				if (!row) {
					row = {
						model,
						period,
						cacheInput: 0,
						uncachedInput: 0,
						output: 0,
						cacheCost: 0,
						uncachedCost: 0,
						outputCost: 0,
						cost: 0
					};
					index.set(key, row);
					rows.push(row);
				}
				const uncached = usage.uncached + usage.cacheWrite;
				row.cacheInput += usage.cacheRead;
				row.uncachedInput += uncached;
				row.output += usage.output;
				const price = priceFor(model, time, period);
				if (price) {
					row.cacheCost += usage.cacheRead / 1e6 * price.cacheHit;
					row.uncachedCost += uncached / 1e6 * price.cacheMiss;
					row.outputCost += usage.output / 1e6 * price.output;
					row.cost = row.cacheCost + row.uncachedCost + row.outputCost;
				}
			}
			return rows;
		}

		function computeRequestUsage(requests) {
			const rows = [];
			for (const request of requests) {
				const usage = usageOfRequest(request);
				if (!usage) continue;
				const model = normalizeModel(request.provenance?.model ?? request.requestConfig?.model);
				const time = request.startedAt ?? request.completedAt ?? Date.now();
				const period = periodForRequest(request);
				const uncached = usage.uncached + usage.cacheWrite;
				const price = priceFor(model, time, period);
				const cacheCost = price ? usage.cacheRead / 1e6 * price.cacheHit : 0;
				const uncachedCost = price ? uncached / 1e6 * price.cacheMiss : 0;
				const outputCost = price ? usage.output / 1e6 * price.output : 0;
				rows.push({
					key: `${request.subagentId ? `${request.subagentId}-` : ""}${request.startSeq}-${rows.length}`,
					seq: request.startSeq,
					time: request.startedAt ?? request.completedAt,
					model,
					period,
					purpose: request.purpose,
					subagentId: request.subagentId,
					subagentLabel: request.subagentLabel,
					cacheInput: usage.cacheRead,
					uncachedInput: uncached,
					output: usage.output,
					cacheCost,
					uncachedCost,
					outputCost,
					cost: cacheCost + uncachedCost + outputCost
				});
			}
			rows.sort((a, b) => (b.time ?? 0) - (a.time ?? 0));
			return rows;
		}

		function modelForSeq(seq, headerEpochs) {
			let model;
			for (const epoch of headerEpochs) {
				if (epoch.seq <= seq) model = epoch.model;
				else break;
			}
			return model;
		}

		function historyEventsToRequests(events, headerEpochs) {
			const requests = [];
			let currentHeader = null;
			let currentContext = null;
			for (const event of events) {
				if (event.type === "request/header") {
					currentHeader = event.data?.header ?? null;
				} else if (event.type === "request/context") {
					currentContext = event.data ?? null;
				} else if (event.type === "assistant/message") {
					const usage = event.data?.usage;
					if (!usage) continue;
					const config = currentHeader?.config;
					const epochModel = headerEpochs ? modelForSeq(event.seq, headerEpochs) : undefined;
					const provider = config?.provider ?? currentContext?.provider;
					const model = config?.model ?? currentContext?.model ?? epochModel;
					requests.push({
						startSeq: event.seq,
						startedAt: event.time,
						completedAt: event.time,
						...provider !== void 0 || model !== void 0 ? {
							provenance: provider !== void 0 || model !== void 0 ? { provider, model } : undefined,
							requestConfig: provider !== void 0 || model !== void 0 ? { provider, model } : undefined
						} : {},
						usage
					});
				} else if (event.type === "compaction/summary") {
					const usage = event.data?.usage;
					if (!usage) continue;
					const provider = event.data?.provider;
					const model = event.data?.model;
					requests.push({
						startSeq: event.seq,
						startedAt: event.time,
						completedAt: event.time,
						provenance: provider !== void 0 || model !== void 0 ? { provider, model } : undefined,
						requestConfig: provider !== void 0 || model !== void 0 ? { provider, model, purpose: "compaction" } : undefined,
						purpose: "compaction",
						usage
					});
				}
			}
			return requests;
		}

		async function fetchAllSessionHistory(sessionId) {
			const ctx = clientCtx;
			if (!ctx) throw new Error("client context unavailable");
			const binding = ctx.sessions.binding(sessionId);
			const session = binding?.session;
			if (!session || typeof session.history !== "function") throw new Error("history unavailable");
			const events = [];
			let beforeSeq;
			let incomplete = false;
			let pages = 0;
			while (true) {
				const res = await session.history({ beforeSeq, maxMessages: 200 });
				if (!res || !res.result || res.result.ok !== true) {
					incomplete = true;
					break;
				}
				const value = res.result.value;
				const entries = value?.events ?? [];
				for (const entry of entries) events.push(entry.event);
				if (!value?.hasMore) break;
				const firstSeq = entries[0]?.event?.seq;
				if (firstSeq == null) {
					incomplete = true;
					break;
				}
				beforeSeq = firstSeq;
				pages += 1;
				if (pages > 10000) {
					incomplete = true;
					break;
				}
			}
			events.sort((a, b) => a.seq - b.seq);
			const headerEpochs = [];
			for (const event of events) {
				if (event.type !== "request/header") continue;
				const model = event.data?.header?.config?.model;
				if (model) headerEpochs.push({ seq: event.seq, model });
			}
			return { events, incomplete, headerEpochs };
		}

		function mergeRequestRows(...lists) {
			const map = new Map();
			for (const list of lists) {
				for (const row of list) {
					if (row.key != null && !map.has(row.key)) map.set(row.key, row);
				}
			}
			return Array.from(map.values()).sort((a, b) => (b.time ?? 0) - (a.time ?? 0));
		}

		function buildSubagentTree(subagents) {
			const byId = new Map();
			for (const subagent of subagents) {
				byId.set(subagent.id, { ...subagent, children: [] });
			}
			const roots = [];
			for (const node of byId.values()) {
				const parent = node.parentId != null ? byId.get(node.parentId) : undefined;
				if (parent) parent.children.push(node);
				else roots.push(node);
			}
			const sortByTime = (a, b) => (a.createdAt ?? a.requests?.[0]?.startedAt ?? 0) - (b.createdAt ?? b.requests?.[0]?.startedAt ?? 0);
			for (const node of byId.values()) node.children.sort(sortByTime);
			roots.sort(sortByTime);
			return roots;
		}

		function mergeAggregateRows(base, extra) {
			const map = new Map(base.map((row) => [`${row.model}\u0000${row.period}`, { ...row }]));
			for (const row of extra) {
				const key = `${row.model}\u0000${row.period}`;
				const current = map.get(key);
				if (!current) {
					map.set(key, { ...row });
					continue;
				}
				current.cacheInput += row.cacheInput;
				current.uncachedInput += row.uncachedInput;
				current.output += row.output;
				current.cacheCost += row.cacheCost;
				current.uncachedCost += row.uncachedCost;
				current.outputCost += row.outputCost;
				current.cost = current.cacheCost + current.uncachedCost + current.outputCost;
			}
			return Array.from(map.values());
		}

		async function loadOlderRequestPage(sessionId, beforeSeq) {
			const ctx = clientCtx;
			const session = ctx?.sessions.binding(sessionId)?.session;
			if (!session || typeof session.history !== "function") return { rows: [], hasMore: false };
			const res = await session.history({ beforeSeq, maxMessages: 100 });
			if (!res || !res.result || res.result.ok !== true) return { rows: [], hasMore: false };
			const entries = res.result.value?.events ?? [];
			const requests = historyEventsToRequests(entries.map((entry) => entry.event), headerEpochsBySession.get(sessionId));
			return {
				rows: computeRequestUsage(requests),
				hasMore: !!res.result.value?.hasMore
			};
		}

		function formatCost(value) {
			if (!Number.isFinite(value) || value <= 0) return "¥0.00";
			return `¥${value.toFixed(2)}`;
		}

		function formatTime(value) {
			return new Date(value).toLocaleString("zh-CN", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
		}

		function BalanceBadge({ sessionId, useSession }) {
			const turnCount = useSession((snapshot) => snapshot.turnEnds.size);
			const requests = useSession((snapshot) => snapshot.views.get("trajectory")?.requests);
			const windowUsageRows = React.useMemo(() => computeSessionUsage(requests ?? []), [requests]);
			const windowRequestRows = React.useMemo(() => computeRequestUsage(requests ?? []), [requests]);
			const [historyState, setHistoryState] = React.useState({ status: "loading", rows: [], lastSeq: 0, incomplete: true });
			const [detailRows, setDetailRows] = React.useState([]);
			const [detailHasMore, setDetailHasMore] = React.useState(false);
			const [detailLoading, setDetailLoading] = React.useState(false);
			const usageRows = historyState.rows.length > 0 ? historyState.rows : windowUsageRows;
			const historyIncomplete = historyState.status !== "ready" || historyState.incomplete;
			const [subagentState, setSubagentState] = React.useState({ status: "loading", subagents: [] });
			const [expandedSubagentIds, setExpandedSubagentIds] = React.useState(() => new Set());
			const subagentTotalCost = React.useMemo(() => subagentState.subagents.reduce((sum, subagent) => sum + (subagent.totalCost ?? 0), 0), [subagentState.subagents]);
			const displayUsageRows = React.useMemo(() => {
				if (subagentState.subagents.length === 0) return usageRows;
				const subagentRows = [];
				for (const subagent of subagentState.subagents) {
					for (const usageRow of subagent.rows) subagentRows.push(usageRow);
				}
				return mergeAggregateRows(usageRows, subagentRows);
			}, [usageRows, subagentState.subagents]);
			const requestRows = React.useMemo(() => detailRows.length > 0 ? detailRows : windowRequestRows, [detailRows, windowRequestRows]);
			const subagentTree = React.useMemo(() => buildSubagentTree(subagentState.subagents), [subagentState.subagents]);
			const detailEntries = React.useMemo(() => {
				const entries = [];
				for (const row of requestRows) entries.push({ kind: "request", row, time: row.time ?? 0 });
				for (const node of subagentTree) entries.push({ kind: "subagent", node, time: node.createdAt ?? node.requests?.[0]?.startedAt ?? 0 });
				entries.sort((a, b) => (b.time ?? 0) - (a.time ?? 0));
				return entries;
			}, [requestRows, subagentTree]);
			const totalCost = React.useMemo(() => usageRows.reduce((sum, row) => sum + row.cost, 0) + subagentTotalCost, [usageRows, subagentTotalCost]);
			const [state, setState] = React.useState({ status: "loading", text: "余额…" });
			const [open, setOpen] = React.useState(false);
			const [showRequests, setShowRequests] = React.useState(false);
			const rootRef = React.useRef(null);
			const lastTurnRef = React.useRef(turnCount);

			const refresh = React.useCallback(async (force = false) => {
				if (!force && balanceCache && Date.now() - balanceCache.fetchedAt < 60000) {
					setState({ status: balanceCache.status, text: balanceCache.text });
					return;
				}
				try {
					const response = await fetch("/dsh-ui-tweaks/balance", { cache: "no-store" });
					const data = await response.json();
					if (data && Array.isArray(data.balance_infos) && data.balance_infos.length > 0) {
						const info = data.balance_infos[0];
						const total = info.total_balance ?? info.balance ?? "—";
						const currency = info.currency === "CNY" ? "CN¥" : info.currency ? ` ${info.currency}` : "";
						const text = `余额 ${currency}${total}`;
						setState({ status: "ok", text });
						balanceCache = { status: "ok", text, fetchedAt: Date.now() };
					} else if (data && data.error === "missing-key") {
						const text = "未配置密钥";
						setState({ status: "error", text });
						balanceCache = { status: "error", text, fetchedAt: Date.now() };
					} else {
						const text = "余额不可用";
						setState({ status: "error", text });
						balanceCache = { status: "error", text, fetchedAt: Date.now() };
					}
				} catch {
					const text = "余额不可用";
					setState({ status: "error", text });
					balanceCache = { status: "error", text, fetchedAt: Date.now() };
				}
			}, []);

			React.useEffect(() => {
				refresh();
				const timer = setInterval(() => refresh(true), 60000);
				return () => clearInterval(timer);
			}, [refresh]);

			React.useEffect(() => {
				lastTurnRef.current = turnCount;
			}, [sessionId]);

			React.useEffect(() => {
				if (turnCount > lastTurnRef.current) refresh(true);
				lastTurnRef.current = turnCount;
			}, [turnCount, refresh]);

			const loadSubagents = React.useCallback(async () => {
				setSubagentState((prev) => ({ ...prev, status: "loading" }));
				try {
					const response = await fetch(`/dsh-ui-tweaks/subagent-usage?sessionId=${encodeURIComponent(sessionId)}`, { cache: "no-store" });
					const data = await response.json();
					if (data && Array.isArray(data.subagents)) {
						const subagents = data.subagents.map((subagent) => {
							const rows = computeSessionUsage(subagent.requests ?? []);
							return {
								...subagent,
								rows,
								totalCost: rows.reduce((sum, row) => sum + row.cost, 0)
							};
						});
						setSubagentState({ status: "ready", subagents });
					} else {
						setSubagentState({ status: "error", subagents: [] });
					}
				} catch {
					setSubagentState({ status: "error", subagents: [] });
				}
			}, [sessionId]);

			React.useEffect(() => {
				setSubagentState({ status: "loading", subagents: [] });
				setExpandedSubagentIds(new Set());
				loadSubagents();
			}, [loadSubagents]);

			React.useEffect(() => {
				let cancelled = false;
				setHistoryState({ status: "loading", rows: [], lastSeq: 0, incomplete: true });
				fetchAllSessionHistory(sessionId)
					.then(({ events, incomplete, headerEpochs }) => {
						if (cancelled) return;
						if (headerEpochs) headerEpochsBySession.set(sessionId, headerEpochs);
						const historyRequests = historyEventsToRequests(events, headerEpochs);
						const lastSeq = historyRequests.reduce((max, request) => Math.max(max, request.startSeq ?? 0), 0);
						setHistoryState({
							status: "ready",
							rows: computeSessionUsage(historyRequests),
							lastSeq,
							incomplete
						});
					})
					.catch(() => {
						if (!cancelled) setHistoryState({ status: "error", rows: [], lastSeq: 0, incomplete: true });
					});
				return () => {
					cancelled = true;
				};
			}, [sessionId]);

			React.useEffect(() => {
				setDetailRows((prev) => mergeRequestRows(prev, windowRequestRows));
				if (windowRequestRows.length > 0) setDetailHasMore(true);
			}, [windowRequestRows]);

			React.useEffect(() => {
				if (historyState.status !== "ready") return;
				const newRequests = (requests ?? []).filter((request) => (request.startSeq ?? 0) > historyState.lastSeq);
				if (newRequests.length === 0) return;
				const newRows = computeSessionUsage(newRequests);
				const newDetails = computeRequestUsage(newRequests);
				setHistoryState((prev) => ({
					...prev,
					rows: mergeAggregateRows(prev.rows, newRows),
					lastSeq: Math.max(prev.lastSeq, ...newRequests.map((request) => request.startSeq ?? 0))
				}));
				setDetailRows((prev) => mergeRequestRows(prev, newDetails));
			}, [requests, historyState.status, historyState.lastSeq]);

			const loadOlder = React.useCallback(async () => {
				if (detailLoading || !detailHasMore) return;
				const mainRows = detailRows.filter((row) => !row.subagentId);
				const oldestSeq = mainRows.length ? Math.min(...mainRows.map((row) => row.seq ?? Infinity)) : undefined;
				if (oldestSeq == null || !Number.isFinite(oldestSeq)) return;
				setDetailLoading(true);
				try {
					const { rows, hasMore } = await loadOlderRequestPage(sessionId, oldestSeq);
					const strictlyOlder = rows.filter((row) => row.seq < oldestSeq);
					setDetailRows((prev) => mergeRequestRows(strictlyOlder, prev));
					setDetailHasMore(hasMore);
				} catch {
					setDetailHasMore(false);
				} finally {
					setDetailLoading(false);
				}
			}, [sessionId, detailLoading, detailHasMore, detailRows]);

			const handleRequestScroll = (event) => {
				const el = event.currentTarget;
				if (el.scrollTop < 30 && detailHasMore && !detailLoading) {
					loadOlder();
				}
			};

			const toggleSubagent = (id) => {
				setExpandedSubagentIds((prev) => {
					const next = new Set(prev);
					if (next.has(id)) next.delete(id);
					else next.add(id);
					return next;
				});
			};

			const subagentTotals = (node) => {
				const totals = { cacheInput: 0, uncachedInput: 0, output: 0, cacheCost: 0, uncachedCost: 0, outputCost: 0, cost: 0 };
				const add = (current) => {
					for (const row of current.rows) {
						totals.cacheInput += row.cacheInput;
						totals.uncachedInput += row.uncachedInput;
						totals.output += row.output;
						totals.cacheCost += row.cacheCost;
						totals.uncachedCost += row.uncachedCost;
						totals.outputCost += row.outputCost;
						totals.cost += row.cost;
					}
					for (const child of current.children) add(child);
				};
				add(node);
				return totals;
			};

			const renderUsageTable = (rows, className) => React.createElement(
				"table",
				{ className: `dsh-ui-usage-table ${className}` },
				React.createElement(
					"thead",
					null,
					React.createElement(
						"tr",
						null,
						React.createElement("th", null, "模型"),
						React.createElement("th", null, "时段"),
						React.createElement("th", null, "缓存输入"),
						React.createElement("th", null, "未缓存输入"),
						React.createElement("th", null, "输出"),
						React.createElement("th", null, "价格")
					)
				),
				React.createElement(
					"tbody",
					null,
					rows.map((row) => React.createElement(
						"tr",
						{ key: `${row.model}:${row.period}` },
						React.createElement("td", null, row.model),
						React.createElement("td", null, row.period === "peak" ? React.createElement("span", { className: "dsh-ui-peak" }, "高峰") : React.createElement("span", { className: "dsh-ui-offpeak" }, "闲时")),
						React.createElement("td", null,
							React.createElement("div", null, formatTokens(row.cacheInput)),
							React.createElement("div", { className: "dsh-ui-usage-subcost" }, formatCost(row.cacheCost))
						),
						React.createElement("td", null,
							React.createElement("div", null, formatTokens(row.uncachedInput)),
							React.createElement("div", { className: "dsh-ui-usage-subcost" }, formatCost(row.uncachedCost))
						),
						React.createElement("td", null,
							React.createElement("div", null, formatTokens(row.output)),
							React.createElement("div", { className: "dsh-ui-usage-subcost" }, formatCost(row.outputCost))
						),
						React.createElement("td", null, formatCost(row.cost))
					))
				)
			);

			const renderSubagentBlock = (node) => {
				const expanded = expandedSubagentIds.has(node.id);
				return React.createElement(
					"div",
					{ key: node.id, className: "dsh-ui-subagent-item" },
					React.createElement(
						"div",
						{ className: "dsh-ui-subagent-item-header" },
						React.createElement(
							"button",
							{ type: "button", className: "dsh-ui-subagent-toggle", onClick: () => toggleSubagent(node.id) },
							expanded ? "⮝" : "⮟"
						),
						React.createElement("span", { className: "dsh-ui-subagent-item-time" }, formatTime(node.createdAt ?? node.requests?.[0]?.startedAt ?? Date.now())),
						React.createElement(
							"span",
							{ className: "dsh-ui-subagent-item-name", title: node.id },
							React.createElement("span", { className: "dsh-ui-subagent-label" }, node.label)
						),
						React.createElement("span", { className: "dsh-ui-subagent-item-cost" }, formatCost(subagentTotals(node).cost))
					),
					expanded && React.createElement(
						"div",
						{ className: "dsh-ui-subagent-detail" },
						node.rows.length > 0 && renderUsageTable(node.rows, "dsh-ui-subagent-table"),
						node.children.length > 0 && React.createElement(
							"div",
							{ className: "dsh-ui-subagent-children" },
							node.children.map(renderSubagentBlock)
						)
					)
				);
			};

			const renderSubagentRow = (node) => {
				const expanded = expandedSubagentIds.has(node.id);
				const totals = subagentTotals(node);
				return React.createElement(
					React.Fragment,
					{ key: node.id },
					React.createElement(
						"tr",
						{ className: "dsh-ui-request-subagent-row" },
						React.createElement("td", null, formatTime(node.createdAt ?? node.requests?.[0]?.startedAt ?? Date.now())),
						React.createElement("td", null,
							React.createElement(
								"div",
								{ className: "dsh-ui-subagent-cell-inner" },
								React.createElement(
									"button",
									{ type: "button", className: "dsh-ui-subagent-toggle", onClick: () => toggleSubagent(node.id) },
									expanded ? "⮝" : "⮟"
								),
								React.createElement(
									"span",
									{ className: "dsh-ui-subagent-title" },
									React.createElement("span", { className: "dsh-ui-subagent-label", title: node.id }, node.label)
								)
							)
						),
						React.createElement("td", null, "—"),
						React.createElement("td", null, formatTokens(totals.cacheInput)),
						React.createElement("td", null, formatTokens(totals.uncachedInput)),
						React.createElement("td", null, formatTokens(totals.output)),
						React.createElement("td", null, formatCost(totals.cost))
					),
					expanded && React.createElement(
						"tr",
						{ key: `${node.id}-detail`, className: "dsh-ui-request-subagent-detail-row" },
						React.createElement(
							"td",
							{ colSpan: 7, className: "dsh-ui-request-subagent-detail" },
							React.createElement(
								"div",
								{ className: "dsh-ui-subagent-box" },
								node.rows.length > 0 && renderUsageTable(node.rows, "dsh-ui-subagent-table"),
								node.children.length > 0 && React.createElement(
									"div",
									{ className: "dsh-ui-subagent-children" },
									node.children.map(renderSubagentBlock)
								)
							)
						)
					)
				);
			};

			React.useEffect(() => {
				if (!open) return;
				const onPointerDown = (event) => {
					if (event.target instanceof Node && rootRef.current?.contains(event.target) === true) return;
					setOpen(false);
				};
				const onKeyDown = (event) => {
					if (event.key === "Escape") setOpen(false);
				};
				document.addEventListener("pointerdown", onPointerDown);
				document.addEventListener("keydown", onKeyDown);
				return () => {
					document.removeEventListener("pointerdown", onPointerDown);
					document.removeEventListener("keydown", onKeyDown);
				};
			}, [open]);

			const balanceClass = state.status === "error" ? "dsh-ui-balance dsh-ui-balance-error" : "dsh-ui-balance";
			return React.createElement(
				"span",
				{ ref: rootRef, className: "dsh-ui-balance-wrap" },
				React.createElement(
					"button",
					{
						type: "button",
						className: balanceClass,
						title: state.text,
						"aria-expanded": open,
						onClick: () => setOpen((value) => !value)
					},
					state.text
				),
				open && React.createElement(
					"div",
					{ className: "dsh-ui-balance-popup", role: "dialog" },
					React.createElement("div", { className: "dsh-ui-balance-popup-header" }, "用量与费用"),
					displayUsageRows.length === 0
						? React.createElement("div", { className: "dsh-ui-balance-popup-empty" }, "暂无用量数据")
						: React.createElement(
							"table",
							{ className: "dsh-ui-usage-table" },
							React.createElement(
								"thead",
								null,
								React.createElement(
									"tr",
									null,
									React.createElement("th", null, "模型"),
									React.createElement("th", null, "时段"),
									React.createElement("th", null, "缓存输入"),
									React.createElement("th", null, "未缓存输入"),
									React.createElement("th", null, "输出"),
									React.createElement("th", null, "价格")
								)
							),
							React.createElement(
								"tbody",
								null,
								displayUsageRows.map((row) => React.createElement(
									"tr",
									{ key: `${row.model}:${row.period}` },
									React.createElement("td", null, row.model),
									React.createElement("td", null, row.period === "peak" ? React.createElement("span", { className: "dsh-ui-peak" }, "高峰") : React.createElement("span", { className: "dsh-ui-offpeak" }, "闲时")),
									React.createElement("td", null,
										React.createElement("div", null, formatTokens(row.cacheInput)),
										React.createElement("div", { className: "dsh-ui-usage-subcost" }, formatCost(row.cacheCost))
									),
									React.createElement("td", null,
										React.createElement("div", null, formatTokens(row.uncachedInput)),
										React.createElement("div", { className: "dsh-ui-usage-subcost" }, formatCost(row.uncachedCost))
									),
									React.createElement("td", null,
										React.createElement("div", null, formatTokens(row.output)),
										React.createElement("div", { className: "dsh-ui-usage-subcost" }, formatCost(row.outputCost))
									),
									React.createElement("td", null, formatCost(row.cost))
								))
							)
						),
					React.createElement(
						"div",
						{ className: "dsh-ui-balance-popup-footer" },
						React.createElement(
							"div",
							{ className: "dsh-ui-balance-popup-total-group" },
							React.createElement(
								"span",
								{ className: "dsh-ui-balance-popup-total" },
								displayUsageRows.length > 0 ? `预估费用 ${formatCost(totalCost)}` : "无价格信息"
							),
							historyIncomplete && React.createElement(
								"span",
								{ className: "dsh-ui-balance-popup-warning" },
								"正在加载历史记录"
							)
						),
						React.createElement(
							"div",
							{ className: "dsh-ui-balance-popup-actions" },
							React.createElement(
								"button",
								{ type: "button", className: "dsh-ui-balance-popup-toggle", onClick: () => setShowRequests((value) => !value) },
								showRequests ? "⮝ 请求明细" : "⮟ 请求明细"
							),
							React.createElement(
								"button",
								{ type: "button", className: "dsh-ui-balance-popup-refresh", onClick: () => refresh(true) },
								"刷新余额"
							)
						)
					),
					showRequests && detailEntries.length > 0 && React.createElement(
						"div",
						{ className: "dsh-ui-request-section", onScroll: handleRequestScroll },
						React.createElement(
							"table",
							{ className: "dsh-ui-request-table" },
							React.createElement(
								"thead",
								null,
								React.createElement(
									"tr",
									null,
									React.createElement("th", null, "时间"),
									React.createElement("th", null, "模型"),
									React.createElement("th", null, "时段"),
									React.createElement("th", null, "缓存"),
									React.createElement("th", null, "未缓存"),
									React.createElement("th", null, "输出"),
									React.createElement("th", null, "价格")
								)
							),
							React.createElement(
								"tbody",
								null,
								detailEntries.map((entry) => entry.kind === "subagent"
									? renderSubagentRow(entry.node)
									: React.createElement(
										"tr",
										{ key: entry.row.key },
										React.createElement("td", null, formatTime(entry.row.time)),
										React.createElement("td", null, entry.row.purpose === "compaction" ? `(压缩) ${entry.row.model}` : entry.row.model),
										React.createElement("td", null, entry.row.period === "peak" ? React.createElement("span", { className: "dsh-ui-peak" }, "高峰") : React.createElement("span", { className: "dsh-ui-offpeak" }, "闲时")),
										React.createElement("td", null,
											React.createElement("div", null, formatTokens(entry.row.cacheInput)),
											React.createElement("div", { className: "dsh-ui-usage-subcost" }, formatCost(entry.row.cacheCost))
										),
										React.createElement("td", null,
											React.createElement("div", null, formatTokens(entry.row.uncachedInput)),
											React.createElement("div", { className: "dsh-ui-usage-subcost" }, formatCost(entry.row.uncachedCost))
										),
										React.createElement("td", null,
											React.createElement("div", null, formatTokens(entry.row.output)),
											React.createElement("div", { className: "dsh-ui-usage-subcost" }, formatCost(entry.row.outputCost))
										),
										React.createElement("td", null, formatCost(entry.row.cost))
									)
								)
							)
						)
					)
				)
			);
		}

		const inject = ["sessions", "slots", "layout"];

		function apply(ctx) {
			clientCtx = ctx;
			ensureStyles();

			const statsObserver = new MutationObserver(() => {
				refreshTokenStats(ctx);
				updateContextMeter(ctx);
			});
			statsObserver.observe(document.body, { subtree: true, childList: true, characterData: true });
			ctx.effect(() => () => statsObserver.disconnect(), "dsh-ui-tweaks: stats observer cleanup");

			const timer = setInterval(() => {
				updateThinkAutoScrollState();
				autoManageThinking();
				autoExpandTools();
				ensureTrajectoryToggle();
				trackingTick();
				refreshTokenStats(ctx);
				updateContextMeter(ctx);
				resumeChatAutoScroll(ctx);
			}, 250);
			ctx.effect(() => () => clearInterval(timer), "dsh-ui-tweaks: interval cleanup");

			const onDocClick = (event) => onDocumentClick(event, ctx);
			document.addEventListener("click", onDocClick, true);
			ctx.effect(() => () => document.removeEventListener("click", onDocClick, true), "dsh-ui-tweaks: click cleanup");

			let chatInputFocusWasAtBottom = false;
			const onComposerPointerDown = (event) => {
				if (!event.isTrusted) return;
				const target = event.target;
				if (!(target instanceof Element)) return;
				if (!target.closest("textarea.uV2eYG_input, [data-composer-seat] textarea")) return;
				chatInputFocusWasAtBottom = !document.querySelector(".Md3f7G_toBottom");
				setTimeout(() => {
					if (chatInputFocusWasAtBottom) {
						const button = document.querySelector(".Md3f7G_toBottom");
						if (button) button.click();
					}
					chatInputFocusWasAtBottom = false;
				}, 150);
			};
			document.addEventListener("pointerdown", onComposerPointerDown, true);
			ctx.effect(() => () => document.removeEventListener("pointerdown", onComposerPointerDown, true), "dsh-ui-tweaks: composer pointer cleanup");

			const onChatUserScroll = (event) => {
				const target = event.target;
				if (!(target instanceof Element)) return;
				if (target.closest("[data-conversation-scroll]") || target.closest(".Md3f7G_scroll")) {
					lastChatUserScroll = Date.now();
				}
			};
			document.addEventListener("wheel", onChatUserScroll, { passive: true, capture: true });
			document.addEventListener("touchstart", onChatUserScroll, { passive: true, capture: true });
			document.addEventListener("pointerdown", onChatUserScroll, { capture: true });
			ctx.effect(() => () => {
				document.removeEventListener("wheel", onChatUserScroll, { capture: true });
				document.removeEventListener("touchstart", onChatUserScroll, { capture: true });
				document.removeEventListener("pointerdown", onChatUserScroll, { capture: true });
			}, "dsh-ui-tweaks: chat scroll intent cleanup");

			const maybeCollapseSidebar = () => {
				const frame = document.querySelector("[data-sidebar-collapsed]");
				const layoutFrame = document.querySelector(".pI_x6G_frame");
				const sidebarCol = document.querySelector(".pI_x6G_sidebarCol");
				const isCollapsed = () => {
					if (frame) return frame.hasAttribute("data-sidebar-collapsed");
					if (layoutFrame) {
						const cols = layoutFrame.style.gridTemplateColumns || getComputedStyle(layoutFrame).gridTemplateColumns;
						const first = parseFloat(cols);
						if (Number.isFinite(first)) return first <= 80;
					}
					if (sidebarCol) return sidebarCol.getBoundingClientRect().width <= 80;
					return false;
				};
				const hero = document.querySelector('.wSkVaW_root[data-phase="hero"]');
				const active = document.querySelector('.wSkVaW_root[data-phase="active"]');
				const state = ctx.sessions.list.getSnapshot();
				const current = state.current;
				const row = current ? state.byId[current] : undefined;
				if (!frame && !layoutFrame && !sidebarCol) return;
				const newConversationPage = hero || (!active && state.phase === "ready" && (!current || (row && row.blank)));
				if (newConversationPage) {
					sidebarAutoCollapsed = false;
					return;
				}
				if (!active) {
					if (state.phase !== "ready") return;
					if (!current || (row && row.blank)) return;
				}
				if (sidebarAutoCollapsed) return;
				if (!isCollapsed()) {
					const toggle = document.querySelector('.hHd-Xa_toggle, [aria-label="收起侧栏"], [aria-label="Collapse sidebar"]');
					if (toggle) toggle.click();
					else ctx.layout?.toggleSidebar();
				}
				sidebarAutoCollapsed = true;
			};
			const unsubscribeSessions = ctx.sessions.list.subscribe(maybeCollapseSidebar);
			const sidebarRetryTimer = setInterval(maybeCollapseSidebar, 500);
			maybeCollapseSidebar();
			ctx.effect(() => () => {
				unsubscribeSessions();
				clearInterval(sidebarRetryTimer);
			}, "dsh-ui-tweaks: session subscription cleanup");

			ctx.slots.inject("conversation.session.header.utilities", () => ctx.slots.register({
				name: "conversation.session.header.utilities",
				id: "dsh-ui-tweaks-balance",
				order: 1000
			}, BalanceBadge));
		}

		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});
