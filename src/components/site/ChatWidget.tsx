import { useEffect, useRef, useState } from "react";
import { MessageSquare, X, Send } from "lucide-react";

type Msg = { role: "bot" | "user"; text: string };

const SUGGESTIONS = [
  "How long does the scan take?",
  "What data do you read?",
  "How do I delete my data?",
  "Can I book a fractional COO?",
];

const KB: { match: RegExp; reply: string }[] = [
  { match: /(time|long|fast|how long|seconds|minute)/i, reply: "Around 90 seconds end-to-end. Connect → approve read-only access → analyze 60 days of aggregated signals → see your Chaos Score." },
  { match: /(data|read|access|scope|permission)/i, reply: "Strictly read-only metadata: meeting titles & schedules, channel & thread counts, task status, doc structure. Never email bodies or file contents." },
  { match: /(delete|retention|remove|erase|72|gdpr)/i, reply: "All raw data auto-deletes within 72 hours. Tokens are wiped the moment analysis completes. You can also hit Delete instantly from the dashboard." },
  { match: /(coo|fractional|consult|hire|book|call)/i, reply: "Yes — once you have your report, book a 30-minute call and the OpsLab team will scope a fractional COO engagement (1–3 days/week)." },
  { match: /(price|cost|pay|free|credit)/i, reply: "The scan is free. No credit card. The fractional COO engagement that follows is scoped to your team size and goals." },
  { match: /(slack|notion|clickup|google|workspace|tool|integration)/i, reply: "Today we connect Google Workspace, Slack, ClickUp, and Notion. You choose which ones to scan — you don't need all four." },
];

function answer(q: string): string {
  for (const k of KB) if (k.match.test(q)) return k.reply;
  return "Great question. Drop a line at janedavydiuk@opslab.uk and the OpsLab team will get back to you within 1 business day.";
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: "bot", text: "Hi — I'm OpsLab consult. Ask anything about the scan, your data, or working with us." },
  ]);
  const [draft, setDraft] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, typing, open]);

  const send = (text: string) => {
    const t = text.trim();
    if (!t) return;
    setMsgs((m) => [...m, { role: "user", text: t }]);
    setDraft("");
    setTyping(true);
    const reply = answer(t);
    window.setTimeout(() => {
      setMsgs((m) => [...m, { role: "bot", text: reply }]);
      setTyping(false);
    }, 650 + Math.min(900, reply.length * 8));
  };

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close chat" : "Open chat"}
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-ember px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-all duration-500 hover:translate-y-[-2px] hover:shadow-[0_24px_60px_-18px_color-mix(in_oklab,var(--primary)_75%,transparent)] md:bottom-7 md:right-7"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/80 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
        </span>
        {open ? <X className="h-4 w-4" /> : <MessageSquare className="h-4 w-4" />}
        <span className="hidden sm:inline">{open ? "Close" : "OpsLab consult"}</span>
      </button>

      <div
        className={`fixed bottom-24 right-4 z-50 w-[min(400px,calc(100vw-2rem))] origin-bottom-right transition-all duration-500 md:right-7 ${
          open
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-3 scale-95 opacity-0"
        }`}
        style={{ transitionTimingFunction: "var(--ease-out-long)" }}
      >
        <div className="overflow-hidden rounded-3xl border border-border bg-card/95 shadow-soft backdrop-blur-xl">
          {/* Header */}
          <div className="relative overflow-hidden bg-ember p-5 text-primary-foreground">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/15 blur-3xl" />
            <div className="relative flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/25 bg-white/10 font-display text-sm font-bold backdrop-blur">
                OL
              </div>
              <div>
                <div className="font-display text-base font-bold">OpsLab consult</div>
                <div className="text-[11px] uppercase tracking-[0.2em] opacity-80">
                  Avg reply · under a minute
                </div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="max-h-[52vh] min-h-[260px] space-y-3 overflow-y-auto px-4 py-4">
            {msgs.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-soft animate-in fade-in slide-in-from-bottom-1 duration-300 ${
                    m.role === "user"
                      ? "bg-foreground text-background rounded-br-sm"
                      : "bg-background text-foreground rounded-bl-sm border border-border"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-sm border border-border bg-background px-4 py-3">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:-0.2s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:-0.1s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary" />
                </div>
              </div>
            )}
          </div>

          {/* Suggestions */}
          {msgs.length <= 2 && (
            <div className="flex flex-wrap gap-2 border-t border-border bg-background/60 px-4 py-3">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => send(s)}
                  className="rounded-full border border-border bg-card px-3 py-1.5 text-xs text-foreground/85 transition-all duration-300 hover:-translate-y-px hover:border-primary hover:text-primary"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(draft);
            }}
            className="flex items-center gap-2 border-t border-border bg-background/80 p-3"
          >
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Ask about the scan, data, or COO…"
              className="flex-1 rounded-full border border-border bg-card px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
            />
            <button
              type="submit"
              aria-label="Send"
              className="grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 hover:scale-105 active:scale-95"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
