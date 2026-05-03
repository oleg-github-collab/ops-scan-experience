import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Check, Shield, Info, FileText, Zap } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Cursor } from "@/components/site/Cursor";
import { Reveal } from "@/components/site/Reveal";
import { ChatWidget } from "@/components/site/ChatWidget";
import {
  GoogleWorkspaceMark,
  SlackMark,
  ClickUpMark,
  NotionMark,
} from "@/components/site/BrandIcons";

export const Route = createFileRoute("/connect")({
  component: ConnectPage,
  head: () => ({
    meta: [
      { title: "Choose what to scan — OpsLab Chaos Scanner" },
      {
        name: "description",
        content:
          "Connect Google Workspace, Slack, ClickUp, and Notion. Read-only, ephemeral, ~90s deep scan.",
      },
    ],
  }),
});

type SourceId = "google" | "slack" | "clickup" | "notion";

type Source = {
  id: SourceId;
  name: string;
  category: string;
  Mark: (p: React.SVGProps<SVGSVGElement>) => React.ReactElement;
  signal: string;
  scope: string;
};

const SOURCES: Source[] = [
  {
    id: "google",
    name: "Google Workspace",
    category: "Calendar signals",
    Mark: GoogleWorkspaceMark,
    signal: "Meetings · Schedule signals",
    scope:
      "Read-only access to meeting and schedule metadata: titles, durations, recurrence, and attendee counts. We never access email or file contents.",
  },
  {
    id: "slack",
    name: "Slack",
    category: "Communication",
    Mark: SlackMark,
    signal: "Channels · Threads · Response cadence",
    scope:
      "Read-only metadata: channel structure, message volume per channel, response latency. Never message contents.",
  },
  {
    id: "clickup",
    name: "ClickUp",
    category: "Projects",
    Mark: ClickUpMark,
    signal: "Tasks · Statuses · Owners",
    scope:
      "Read-only metadata: task counts by status, ownership, due-date health, cycle time. Never task descriptions.",
  },
  {
    id: "notion",
    name: "Notion",
    category: "Knowledge",
    Mark: NotionMark,
    signal: "Pages · Databases · Freshness",
    scope:
      "Read-only metadata: workspace structure, page age, edit cadence, orphan pages. Never page contents.",
  },
];

const REPORT_BARS = [
  { label: "Meeting overload", w: 86 },
  { label: "Channel noise", w: 72 },
  { label: "Task chaos", w: 64 },
  { label: "Documentation health", w: 58 },
];

function ConnectPage() {
  const [selected, setSelected] = useState<Record<SourceId, boolean>>({
    google: true,
    slack: true,
    clickup: true,
    notion: true,
  });
  const [focused, setFocused] = useState<SourceId>("google");

  const queued = useMemo(
    () => SOURCES.filter((s) => selected[s.id]).length,
    [selected],
  );
  const focusedSrc = SOURCES.find((s) => s.id === focused)!;

  const toggle = (id: SourceId) =>
    setSelected((s) => ({ ...s, [id]: !s[id] }));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Cursor />
      <Nav />

      <main className="mx-auto max-w-[1400px] px-4 pt-10 pb-24 sm:px-6 md:pt-14 md:pb-32">
        {/* COCKPIT SHELL */}
        <Reveal variant="scale">
          <section className="relative overflow-hidden rounded-[2rem] bg-[oklch(0.16_0.02_40)] text-[oklch(0.97_0.01_80)] shadow-soft">
            {/* ambient washes */}
            <div className="pointer-events-none absolute inset-0 opacity-90 [background:radial-gradient(70%_60%_at_84%_22%,color-mix(in_oklab,var(--primary)_24%,transparent),transparent_58%),radial-gradient(52%_40%_at_12%_82%,rgba(255,255,255,0.06),transparent_62%)]" />
            <div className="pointer-events-none absolute inset-0 [background:linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_50%_0%,black_30%,transparent_80%)]" />

            <div className="relative grid gap-7 p-5 sm:p-7 lg:grid-cols-[1.7fr_1fr] lg:p-8">
              {/* LEFT: header + flow */}
              <div>
                {/* Head */}
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-primary/90">
                      <span className="inline-block h-2 w-2 rounded-full bg-primary shadow-[0_0_0_4px_color-mix(in_oklab,var(--primary)_18%,transparent)]" />
                      Deep scan sources
                    </div>
                    <h1 className="mt-5 font-display text-[2rem] font-bold leading-[1.02] sm:text-4xl lg:text-[2.75rem]">
                      Choose What to Scan
                    </h1>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
                      Connect the tools your team uses daily. The more tools
                      connected, the more complete your audit.
                    </p>
                  </div>

                  <div className="flex flex-col items-stretch gap-3 lg:items-end">
                    <div className="flex flex-wrap gap-2">
                      <UtilityBtn icon={Info}>How this screen works</UtilityBtn>
                      <UtilityBtn icon={Shield}>Security guarantees</UtilityBtn>
                      <UtilityBtn icon={FileText}>Policies &amp; consent</UtilityBtn>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <Kpi value="0" label="live" />
                      <Kpi value={String(queued)} label="queued" />
                      <Kpi value="~90s" label="audit" />
                    </div>
                  </div>
                </div>

                {/* FLOW BOARD */}
                <div className="relative mt-8 overflow-hidden rounded-[1.6rem] border border-white/10 bg-[oklch(0.13_0.02_40)] p-5 sm:p-7">
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

                  <div className="grid gap-6 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
                    {/* Sources column */}
                    <div>
                      <ColumnLabel>What you provide</ColumnLabel>
                      <ul className="mt-4 space-y-2.5">
                        {SOURCES.map((s) => {
                          const active = selected[s.id];
                          const isFocus = focused === s.id;
                          return (
                            <li key={s.id}>
                              <button
                                type="button"
                                onMouseEnter={() => setFocused(s.id)}
                                onFocus={() => setFocused(s.id)}
                                onClick={() => toggle(s.id)}
                                className={`group relative flex w-full items-center gap-3 rounded-2xl border px-3.5 py-3 text-left transition-all duration-500 ${
                                  active
                                    ? "border-primary/45 bg-white/[0.04] shadow-[inset_0_0_0_1px_color-mix(in_oklab,var(--primary)_18%,transparent),0_18px_40px_-22px_color-mix(in_oklab,var(--primary)_55%,transparent)]"
                                    : "border-white/10 bg-white/[0.02] hover:border-white/25"
                                } ${isFocus ? "translate-x-[2px]" : ""}`}
                              >
                                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/95 shadow-soft">
                                  <s.Mark />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <div className="truncate font-display text-sm font-bold">
                                    {s.name}
                                  </div>
                                  <div className="truncate text-[11px] uppercase tracking-[0.16em] text-white/55">
                                    {s.category}
                                  </div>
                                </div>
                                <span
                                  className={`grid h-5 w-5 place-items-center rounded-full border text-[10px] transition-all duration-300 ${
                                    active
                                      ? "border-primary bg-primary text-primary-foreground"
                                      : "border-white/25 bg-transparent"
                                  }`}
                                >
                                  {active && <Check className="h-3 w-3" />}
                                </span>
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    {/* Scanner core */}
                    <div className="relative hidden md:flex md:items-center md:justify-center">
                      <FlowLines />
                      <div className="relative">
                        <div className="absolute inset-[-30%] rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--primary)_45%,transparent),transparent_70%)] blur-2xl animate-hero-flicker" />
                        <div className="relative grid h-44 w-44 place-items-center rounded-full border border-primary/40 bg-[oklch(0.18_0.04_40)] shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_30px_80px_-30px_color-mix(in_oklab,var(--primary)_70%,transparent)]">
                          <div className="text-center">
                            <div className="font-display text-base font-bold tracking-[0.18em] text-primary">
                              OPSLAB
                            </div>
                            <div className="mt-1 text-[10px] uppercase tracking-[0.28em] text-white/65">
                              Scanner
                            </div>
                            <div className="mx-auto mt-3 h-px w-10 bg-white/20" />
                            <div className="mt-2 text-[10px] text-white/55">
                              5–9 insights · ~90s
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Deliverables */}
                    <div>
                      <ColumnLabel>What OpsLab delivers</ColumnLabel>
                      <ul className="mt-4 space-y-2.5">
                        <Deliver title="Diagnostic report" body="5–9 insights · benchmarks · ROI in $" />
                        <Deliver title="30-day action plan" body="Prioritized steps with owners" />
                        <Deliver title="Fractional COO" body="1–3 days/week · we build your ops engine" highlight />
                      </ul>
                    </div>
                  </div>
                </div>

                {/* CTA row */}
                <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-xs text-white/55">
                    By connecting, you accept our{" "}
                    <Link to="/privacy" className="text-white/85 underline-offset-4 hover:underline">
                      privacy &amp; data handling
                    </Link>
                    .
                  </div>
                  <button
                    type="button"
                    className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-all duration-500 hover:translate-y-[-2px] hover:shadow-[0_28px_70px_-20px_color-mix(in_oklab,var(--primary)_80%,transparent)]"
                  >
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                    <Zap className="relative h-4 w-4" />
                    <span className="relative">Connect {queued} {queued === 1 ? "tool" : "tools"} →</span>
                  </button>
                </div>
              </div>

              {/* RIGHT: report panel */}
              <aside className="rounded-[1.6rem] border border-white/10 bg-[oklch(0.13_0.02_40)] p-5 sm:p-6">
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/55">
                  What enters the audit
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/75">
                  The ring shows coverage. The bars below show which insights
                  will actually land in the report.
                </p>

                {/* Coverage ring */}
                <div className="relative mx-auto mt-6 grid h-44 w-44 place-items-center">
                  <CoverageRing value={queued} max={SOURCES.length} />
                  <div className="absolute text-center">
                    <div className="font-display text-3xl font-bold">
                      {queued}
                      <span className="text-base text-white/55">/{SOURCES.length}</span>
                    </div>
                    <div className="mt-0.5 text-[10px] uppercase tracking-[0.22em] text-white/55">
                      sources active
                    </div>
                  </div>
                </div>

                <ul className="mt-6 space-y-2 text-sm">
                  {SOURCES.map((s) => (
                    <li key={s.id} className="flex items-center gap-2 text-white/80">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          selected[s.id] ? "bg-primary" : "bg-white/20"
                        }`}
                      />
                      {s.signal}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 border-t border-white/10 pt-5">
                  <div className="text-[11px] uppercase tracking-[0.22em] text-white/55">
                    What's in the report
                  </div>
                  <ul className="mt-3 space-y-3">
                    {REPORT_BARS.map((b, i) => {
                      const w = Math.round((queued / SOURCES.length) * b.w);
                      return (
                        <li key={b.label}>
                          <div className="mb-1 flex items-center justify-between text-xs">
                            <span className="text-white/85">{b.label}</span>
                            <span className="text-[10px] uppercase tracking-[0.18em] text-white/45">
                              {w >= 25 ? "in the report" : "limited"}
                            </span>
                          </div>
                          <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-primary to-[oklch(0.78_0.18_55)] transition-[width] duration-700"
                              style={{
                                width: `${Math.max(6, w)}%`,
                                transitionDelay: `${i * 80}ms`,
                              }}
                            />
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </aside>
            </div>
          </section>
        </Reveal>

        {/* FOCUSED SOURCE PANEL */}
        <Reveal variant="up" delay={120}>
          <section className="mt-8 rounded-[2rem] border border-border bg-card p-5 sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-primary">
                  Focused source
                </div>
                <p className="mt-1 text-sm text-ink-soft">
                  Switch sources with quick tabs and read the key details right here.
                </p>
              </div>
              <div className="rounded-full border border-border bg-background px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-ink-soft">
                {selected[focused] ? "Selected" : "Not queued"}
              </div>
            </div>

            <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {SOURCES.map((s) => {
                const isFocus = focused === s.id;
                return (
                  <button
                    type="button"
                    key={s.id}
                    onClick={() => setFocused(s.id)}
                    className={`group relative flex items-center gap-3 rounded-2xl border px-3.5 py-3 text-left transition-all duration-500 ${
                      isFocus
                        ? "border-primary bg-primary/[0.06] shadow-soft"
                        : "border-border bg-background hover:border-foreground/35"
                    }`}
                  >
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-white shadow-soft">
                      <s.Mark />
                    </div>
                    <div className="min-w-0">
                      <div className="truncate font-display text-sm font-bold">
                        {s.name}
                      </div>
                      <div className="truncate text-[10px] uppercase tracking-[0.18em] text-ink-soft">
                        {selected[s.id] ? "Queued" : "Not selected"}
                      </div>
                    </div>
                    <span
                      className={`ml-auto h-2 w-2 rounded-full transition-colors ${
                        selected[s.id] ? "bg-primary" : "bg-border"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            <div className="mt-7 grid gap-6 lg:grid-cols-[1fr_1.3fr]">
              <div className="rounded-2xl border border-border bg-background p-5">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-card shadow-soft">
                    <focusedSrc.Mark />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold">{focusedSrc.name}</h3>
                    <div className="text-xs uppercase tracking-[0.18em] text-ink-soft">
                      {focusedSrc.category} · {focusedSrc.signal}
                    </div>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-ink-soft">
                  {focusedSrc.scope}
                </p>
                <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/[0.06] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-primary">
                  <Shield className="h-3 w-3" /> Read-only · ephemeral 72h
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <DetailCard
                  icon={Info}
                  title="What gets read"
                  body="Aggregated, anonymized metadata only. No content. No PII. Counts, cadence, structure — nothing more."
                />
                <DetailCard
                  icon={FileText}
                  title="How to use this screen"
                  body="Toggle a source on the left to add or remove it from the queue. The right panel updates the audit coverage live."
                />
                <DetailCard
                  icon={Shield}
                  title="Security guarantees"
                  body="OAuth read-only, application-level scope. Tokens wiped after analysis. Raw data auto-deleted in 72h."
                />
                <DetailCard
                  icon={Zap}
                  title="Time to insight"
                  body="The deep scan completes in roughly 90 seconds end-to-end. Quick scan available without connecting tools."
                />
              </div>
            </div>

            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
              <Link
                to="/quick-scan"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold transition-colors hover:border-foreground"
              >
                Or try the Quick Scan
                <ArrowRight className="h-4 w-4" />
              </Link>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3 text-sm font-semibold text-background transition-colors hover:bg-primary"
              >
                Connect {queued} {queued === 1 ? "tool" : "tools"}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </section>
        </Reveal>
      </main>

      <Footer />
      <ChatWidget />
    </div>
  );
}

/* ---------------- bits ---------------- */

function UtilityBtn({
  icon: Icon,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/80 backdrop-blur transition-all duration-300 hover:-translate-y-px hover:border-white/30 hover:text-white"
    >
      <Icon className="h-3.5 w-3.5" />
      {children}
    </button>
  );
}

function Kpi({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2 text-center">
      <div className="font-display text-xl font-bold leading-none">{value}</div>
      <div className="mt-1 text-[10px] uppercase tracking-[0.22em] text-white/55">
        {label}
      </div>
    </div>
  );
}

function ColumnLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[10px] uppercase tracking-[0.28em] text-white/45">
      {children}
    </div>
  );
}

function Deliver({
  title,
  body,
  highlight,
}: {
  title: string;
  body: string;
  highlight?: boolean;
}) {
  return (
    <li
      className={`group relative flex items-start gap-3 rounded-2xl border px-3.5 py-3 transition-all duration-500 ${
        highlight
          ? "border-primary/45 bg-primary/[0.08]"
          : "border-white/10 bg-white/[0.02] hover:border-white/25"
      }`}
    >
      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary to-[oklch(0.5_0.2_30)] text-primary-foreground shadow-soft">
        <ArrowRight className="h-4 w-4" />
      </div>
      <div>
        <div className="font-display text-sm font-bold leading-tight">{title}</div>
        <div className="mt-1 text-xs leading-snug text-white/65">{body}</div>
      </div>
    </li>
  );
}

function FlowLines() {
  return (
    <svg
      viewBox="0 0 200 240"
      preserveAspectRatio="none"
      aria-hidden
      className="absolute inset-0 h-full w-full text-primary/35"
    >
      {[40, 90, 150, 200].map((y, i) => (
        <path
          key={i}
          d={`M0 ${y} C 60 ${y}, 70 120, 100 120`}
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="3 4"
          fill="none"
        />
      ))}
      {[60, 110, 170].map((y, i) => (
        <path
          key={`r${i}`}
          d={`M100 120 C 130 120, 140 ${y}, 200 ${y}`}
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="3 4"
          fill="none"
        />
      ))}
    </svg>
  );
}

function CoverageRing({ value, max }: { value: number; max: number }) {
  const r = 78;
  const c = 2 * Math.PI * r;
  const pct = value / max;
  return (
    <svg viewBox="0 0 180 180" className="h-44 w-44 -rotate-90">
      <circle cx="90" cy="90" r={r} stroke="rgba(255,255,255,0.08)" strokeWidth="10" fill="none" />
      <circle
        cx="90"
        cy="90"
        r={r}
        stroke="url(#cring)"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
        strokeDasharray={c}
        strokeDashoffset={c * (1 - pct)}
        style={{ transition: "stroke-dashoffset 700ms var(--ease-out-long)" }}
      />
      <defs>
        <linearGradient id="cring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="oklch(0.78 0.18 55)" />
          <stop offset="1" stopColor="oklch(0.5 0.2 30)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function DetailCard({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-background p-4 hover-lift">
      <div className="flex items-center gap-2">
        <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-primary">
          <Icon className="h-4 w-4" />
        </div>
        <div className="font-display text-sm font-bold">{title}</div>
      </div>
      <p className="mt-2 text-xs leading-relaxed text-ink-soft">{body}</p>
    </div>
  );
}
