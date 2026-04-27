import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Cursor } from "@/components/site/Cursor";
import { Reveal } from "@/components/site/Reveal";
import {
  IconAgencies,
  IconSoftware,
  IconOps,
  IconShield,
  IconClock,
  IconROI,
  IconCursor,
  IconKey,
  IconSparkle,
  IconGauge,
} from "@/components/site/icons";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "OpsLab Chaos Scanner — Audit your operational chaos in 90s" },
      {
        name: "description",
        content:
          "Connect Google Workspace, Slack, ClickUp, and Notion. Get your Operations Chaos Score with 5–9 actionable insights in 90 seconds. Read-only, 72h ephemeral.",
      },
      { property: "og:title", content: "OpsLab Chaos Scanner" },
      {
        property: "og:description",
        content:
          "Automated fractional COO audit. Operations Chaos Score + ROI in 90 seconds.",
      },
    ],
  }),
});

const paths = [
  {
    Icon: IconAgencies,
    tag: "Agencies · Services · Consulting",
    title: "Protect margin, scope control, and delivery consistency",
    body: "Built for client-facing teams that need stronger intake, tighter execution, and fewer hours leaking into unplanned work.",
    hint: "Best when you need cleaner delivery, profitability visibility, and leadership leverage fast.",
    deep: "/connect?industry=professional_services",
    quick: "/quick-scan?industry=professional_services",
  },
  {
    Icon: IconSoftware,
    tag: "Software · Product · Engineering",
    title: "Reduce release friction and make ownership visible",
    body: "Designed for product and engineering teams that need cleaner backlog flow, clearer incident response, and less fire-drill work.",
    hint: "Best when execution feels reactive and quality or throughput is slipping.",
    deep: "/connect?industry=software_team",
    quick: "/quick-scan?industry=software_team",
  },
  {
    Icon: IconOps,
    tag: "E-commerce · Manufacturing · HoReCa · Field Ops",
    title: "Tighten handoffs, planning rhythm, and live operational visibility",
    body: "For operations-heavy businesses that depend on cleaner coordination across shifts, queues, teams, and recurring operating routines.",
    hint: "Best when work drops between functions, schedules break late, or exceptions surface after the system is already under stress.",
    deep: "/connect?industry=general_ops",
    quick: "/quick-scan?industry=general_ops",
    extra: [
      { label: "Manufacturing", href: "/connect?industry=manufacturing_ops" },
      { label: "HoReCa / hospitality", href: "/connect?industry=horeca" },
      { label: "Field services", href: "/connect?industry=field_services" },
    ],
  },
];

const trust = [
  {
    Icon: IconShield,
    title: "Read-only access",
    body: "We never modify your data. Only aggregated, anonymized counts are analyzed. No email bodies, no file contents.",
  },
  {
    Icon: IconClock,
    title: "72-hour ephemeral",
    body: "All data auto-deletes within 72 hours. Tokens are wiped the moment analysis completes. Delete instantly anytime.",
  },
  {
    Icon: IconROI,
    title: "Real ROI numbers",
    body: "Get concrete hours saved & dollar values based on your actual data — not generic industry averages.",
  },
];

const steps = [
  {
    n: "01",
    Icon: IconCursor,
    title: "Select tools",
    body: "Check the tools you want to scan. Your stack, your scope.",
  },
  {
    n: "02",
    Icon: IconKey,
    title: "Approve access",
    body: "Confirm read-only permissions per tool. Nothing modified, ever.",
  },
  {
    n: "03",
    Icon: IconSparkle,
    title: "AI audit",
    body: "We analyze 60 days of aggregated, anonymized signals.",
  },
  {
    n: "04",
    Icon: IconGauge,
    title: "Chaos Score",
    body: "Get 5–9 actionable insights with concrete ROI numbers.",
  },
];

const tools = ["Google Workspace", "Slack", "ClickUp", "Notion"];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Cursor />
      <Nav />

      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Layered backdrop for contrast + depth */}
        <div className="pointer-events-none absolute inset-0 bg-hero-wash" />
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
        <div className="pointer-events-none absolute left-1/2 top-[-20%] h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-ember opacity-[0.22] blur-3xl animate-hero-flicker" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />

        <div className="relative mx-auto max-w-5xl px-6 pt-24 pb-28 text-center md:px-10 md:pt-32 md:pb-36">
          <Reveal variant="fade" delay={0}>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-primary/25 bg-card/80 px-4 py-1.5 text-xs font-medium text-primary shadow-soft backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="uppercase tracking-[0.18em]">
                Automated fractional COO audit
              </span>
            </div>
          </Reveal>

          <Reveal variant="mask" delay={120}>
            <h1 className="mt-10 text-[2.75rem] font-bold leading-[0.95] tracking-tight text-foreground md:text-7xl lg:text-[5.75rem]">
              Audit Your
              <br />
              <span className="text-flame">Operational Chaos</span>
            </h1>
          </Reveal>

          <Reveal variant="up" delay={240}>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-foreground/80 md:text-lg">
              Connect your tools. Get your{" "}
              <span className="font-semibold text-foreground">
                Operations Chaos Score
              </span>{" "}
              with 5–9 actionable insights in just{" "}
              <span className="font-semibold text-foreground">90 seconds</span>.
            </p>
          </Reveal>

          <Reveal variant="up" delay={320}>
            <div className="mx-auto mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs uppercase tracking-[0.16em] text-ink-soft">
              <span className="inline-flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-primary" />
                Read-only access
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-primary" />
                Auto-deletes in 72h
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-primary" />
                No credit card
              </span>
            </div>
          </Reveal>

          <Reveal variant="up" delay={400}>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/connect"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-9 py-4 text-base font-semibold text-primary-foreground shadow-glow transition-all duration-500 hover:shadow-[0_22px_60px_-16px_color-mix(in_oklab,var(--primary)_75%,transparent)]"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">Start Your Scan</span>
                <ArrowRight className="relative h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
              </a>
              <a
                href="/quick-scan"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-9 py-4 text-base font-semibold text-foreground transition-all duration-500 hover:border-foreground"
              >
                Start Quick Scan
                <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>

          <Reveal variant="up" delay={520}>
            <div className="mt-14">
              <p className="text-[0.68rem] uppercase tracking-[0.28em] text-ink-soft">
                Works with
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                {tools.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-card/70 px-4 py-1.5 text-sm text-foreground/85 backdrop-blur hover-lift"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm text-ink-soft">
                You choose which tools to scan.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* AUDIT PATHS */}
      <section id="paths" className="relative px-6 py-28 md:px-10">
        <div className="mx-auto max-w-6xl">
          <Reveal variant="up" className="mx-auto max-w-3xl text-center">
            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-primary">
              Audit paths
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-[1.05] md:text-5xl">
              Choose the path that fits your operation
            </h2>
            <p className="mt-6 text-base text-ink-soft md:text-lg">
              A buyer-aware flow built for teams that bring in ops
              consultancies, agencies, and fractional COOs to stabilize
              execution and unlock growth.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {paths.map((p, i) => (
              <Reveal
                key={p.title}
                as="article"
                variant="up"
                delay={i * 120}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-8 hover-lift"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />

                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl border border-border bg-background text-primary shadow-soft transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-105">
                    <p.Icon />
                  </div>
                  <div className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-ink-soft">
                    {p.tag}
                  </div>
                </div>

                <h3 className="mt-7 text-xl font-bold leading-snug">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {p.body}
                </p>
                <p className="mt-4 text-xs font-medium text-primary">
                  {p.hint}
                </p>

                {p.extra && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.extra.map((e) => (
                      <a
                        key={e.label}
                        href={e.href}
                        className="rounded-full border border-border bg-background px-3 py-1 text-xs transition-colors duration-300 hover:border-primary hover:text-primary"
                      >
                        {e.label}
                      </a>
                    ))}
                  </div>
                )}

                <div className="mt-auto flex gap-3 pt-10">
                  <a
                    href={p.deep}
                    className="flex-1 rounded-full bg-foreground px-4 py-2.5 text-center text-sm font-semibold text-background transition-colors duration-300 hover:bg-primary"
                  >
                    Deep scan
                  </a>
                  <a
                    href={p.quick}
                    className="flex-1 rounded-full border border-border bg-background px-4 py-2.5 text-center text-sm font-semibold transition-colors duration-300 hover:border-foreground"
                  >
                    Quick scan
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section id="trust" className="relative px-6 py-24 md:px-10">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-peach/30 to-transparent" />
        <div className="relative mx-auto max-w-6xl">
          <Reveal variant="up" className="mx-auto max-w-2xl text-center">
            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-primary">
              Trust &amp; privacy
            </p>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Built to earn trust in 90 seconds
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {trust.map((t, i) => (
              <Reveal
                key={t.title}
                variant="up"
                delay={i * 120}
                className="rounded-3xl border border-border bg-card p-8 hover-lift"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <t.Icon />
                </div>
                <h3 className="mt-6 text-lg font-bold">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {t.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="relative overflow-hidden px-6 py-28 md:px-10">
        <div className="relative mx-auto max-w-6xl">
          <Reveal variant="up" className="max-w-2xl">
            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-primary">
              Process
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-[1.05] md:text-5xl">
              Four steps. Ninety seconds. Zero fluff.
            </h2>
            <p className="mt-5 text-ink-soft md:text-lg">
              You keep control the whole way through. Nothing modified, nothing
              retained past 72 hours.
            </p>
          </Reveal>

          <ol className="mt-16 grid gap-5 md:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal
                key={s.n}
                as="li"
                variant="up"
                delay={i * 120}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 hover-lift"
              >
                <div className="pointer-events-none absolute right-4 top-3 font-display text-6xl font-bold text-primary/10 transition-colors duration-500 group-hover:text-primary/25">
                  {s.n}
                </div>
                <div className="relative">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-foreground text-background transition-colors duration-500 group-hover:bg-primary">
                    <s.Icon width={18} height={18} />
                  </div>
                  <h3 className="mt-6 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal variant="fade" delay={200}>
            <p className="mt-12 text-xs text-ink-soft">
              By connecting, you agree to our read-only access policy.{" "}
              <a
                href="/privacy"
                className="underline underline-offset-4 transition-colors hover:text-primary"
              >
                Privacy Policy
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-28 md:px-10">
        <Reveal variant="scale" className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-[2rem] bg-ember p-10 text-primary-foreground shadow-glow md:p-16 noise">
            <div className="pointer-events-none absolute -top-20 -right-20 h-80 w-80 rounded-full bg-white/20 blur-3xl" />
            <div className="relative grid items-center gap-12 md:grid-cols-[1.3fr_1fr]">
              <div>
                <p className="text-[0.68rem] uppercase tracking-[0.28em] opacity-80">
                  Ready?
                </p>
                <h2 className="mt-4 text-4xl font-bold leading-[1.05] md:text-5xl">
                  Stop fighting fires. See your Chaos Score in 90 seconds.
                </h2>
                <p className="mt-6 max-w-xl text-base leading-relaxed opacity-90 md:text-lg">
                  The scanner is the diagnostic arm of OpsLab — run it once and
                  you'll know exactly what's leaking margin, time, and team
                  energy.
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="/connect"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-background px-8 py-3.5 text-sm font-semibold text-foreground transition hover:bg-background/90"
                  >
                    Start Your Scan
                    <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                  </a>
                  <a
                    href="/quick-scan"
                    className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-semibold text-primary-foreground backdrop-blur transition hover:bg-white/20"
                  >
                    Quick Scan
                    <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
              <ul className="space-y-3 text-sm">
                {[
                  "5–9 actionable insights",
                  "Hours saved + $ ROI numbers",
                  "No credit card required",
                  "Data auto-deletes in 72h",
                ].map((i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur"
                  >
                    <Check className="h-4 w-4 shrink-0" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
}
