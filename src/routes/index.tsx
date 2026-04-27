import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Shield, Clock, TrendingUp, Check } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

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
    emoji: "🤝",
    tag: "Agencies · Services · Consulting",
    title: "Protect margin, scope control, and delivery consistency",
    body: "Built for client-facing teams that need stronger intake, tighter execution, and fewer hours leaking into unplanned work.",
    hint: "Best when you need cleaner delivery, profitability visibility, and leadership leverage fast.",
    deep: "/connect?industry=professional_services",
    quick: "/quick-scan?industry=professional_services",
  },
  {
    emoji: "🧩",
    tag: "Software · Product · Engineering",
    title: "Reduce release friction and make ownership visible",
    body: "Designed for product and engineering teams that need cleaner backlog flow, clearer incident response, and less fire-drill work.",
    hint: "Best when execution feels reactive and quality or throughput is slipping.",
    deep: "/connect?industry=software_team",
    quick: "/quick-scan?industry=software_team",
  },
  {
    emoji: "📦",
    tag: "E-commerce · Manufacturing · HoReCa · Field Ops",
    title: "Tighten handoffs, planning rhythm, and live operational visibility",
    body: "For operations-heavy businesses that depend on cleaner coordination across shifts, queues, teams, and recurring operating routines.",
    hint: "Best when work drops between functions, schedules break late, or exceptions surface after the system is already under stress.",
    deep: "/connect?industry=general_ops",
    quick: "/quick-scan?industry=general_ops",
    extra: [
      { label: "Manufacturing operations", href: "/connect?industry=manufacturing_ops" },
      { label: "HoReCa / hospitality", href: "/connect?industry=horeca" },
      { label: "Field services", href: "/connect?industry=field_services" },
    ],
  },
];

const trust = [
  {
    icon: Shield,
    title: "Read-only access",
    body: "We never modify your data. Only aggregated, anonymized counts are analyzed. No email bodies, no file contents.",
  },
  {
    icon: Clock,
    title: "72-hour ephemeral",
    body: "All data auto-deletes within 72 hours. Tokens are wiped the moment analysis completes. Delete instantly anytime.",
  },
  {
    icon: TrendingUp,
    title: "Real ROI numbers",
    body: "Get concrete hours saved & dollar values based on your actual data — not generic industry averages.",
  },
];

const steps = [
  { n: "01", title: "Select tools", body: "Check the tools you want to scan" },
  { n: "02", title: "Approve access", body: "Confirm read-only permissions per tool" },
  { n: "03", title: "AI audit", body: "We analyze 60 days of aggregated data" },
  { n: "04", title: "Chaos Score", body: "Get actionable insights + ROI numbers" },
];

const tools = ["Google Workspace", "Slack", "ClickUp", "Notion"];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-hero" />
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-ember opacity-30 blur-3xl animate-hero-flicker" />

        <div className="relative mx-auto max-w-5xl px-6 pt-20 pb-24 text-center md:px-10 md:pt-28 md:pb-32">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-peach px-4 py-1.5 text-xs font-medium text-primary animate-fade-up">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Automated fractional COO audit
          </div>

          <h1
            className="mt-8 text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl animate-fade-up"
            style={{ animationDelay: "80ms" }}
          >
            Audit Your
            <br />
            <span className="text-flame">Operational Chaos</span>
          </h1>

          <p
            className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl animate-fade-up"
            style={{ animationDelay: "160ms" }}
          >
            Connect your tools. Get your{" "}
            <span className="font-semibold text-foreground">
              Operations Chaos Score
            </span>{" "}
            with 5–9 actionable insights in just 90 seconds.
          </p>

          <p
            className="mt-5 text-sm text-muted-foreground animate-fade-up"
            style={{ animationDelay: "220ms" }}
          >
            Read-only access · Data auto-deletes in 72h · No credit card required
          </p>

          <div
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-up"
            style={{ animationDelay: "280ms" }}
          >
            <a
              href="/connect"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow transition hover:brightness-110 hover:shadow-[0_20px_50px_-12px_color-mix(in_oklab,var(--primary)_70%,transparent)]"
            >
              Start Your Scan
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/quick-scan"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-8 py-4 text-base font-semibold text-foreground hover-lift"
            >
              Start Quick Scan →
            </a>
          </div>

          <div
            className="mt-10 animate-fade-up"
            style={{ animationDelay: "360ms" }}
          >
            <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
              Works with
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              {tools.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-foreground/80 hover-lift"
                >
                  {t}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              You choose which tools to scan.
            </p>
          </div>
        </div>
      </section>

      {/* AUDIT PATHS */}
      <section id="paths" className="relative px-6 py-24 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-5xl">
              Choose the audit path that fits your operation
            </h2>
            <p className="mt-5 text-base text-ink-soft md:text-lg">
              Start with a buyer-aware flow built for the teams that most often
              bring in ops consultancies, agencies, and fractional COOs to
              stabilize execution and unlock growth.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {paths.map((p, i) => (
              <article
                key={p.title}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-peach p-7 hover-lift animate-fade-up"
                style={{ animationDelay: `${i * 90}ms` }}
              >
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-background text-2xl shadow-soft">
                    {p.emoji}
                  </div>
                  <div className="text-xs font-medium uppercase tracking-[0.14em] text-ink-soft">
                    {p.tag}
                  </div>
                </div>
                <h3 className="mt-6 text-xl font-bold leading-snug">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-ink-soft">{p.body}</p>
                <p className="mt-4 text-xs font-medium text-primary">{p.hint}</p>

                {p.extra && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.extra.map((e) => (
                      <a
                        key={e.label}
                        href={e.href}
                        className="rounded-full border border-border bg-background px-3 py-1 text-xs hover:border-primary hover:text-primary transition-colors"
                      >
                        {e.label}
                      </a>
                    ))}
                  </div>
                )}

                <div className="mt-auto flex gap-3 pt-8">
                  <a
                    href={p.deep}
                    className="flex-1 rounded-full bg-foreground px-4 py-2.5 text-center text-sm font-semibold text-background hover:bg-primary transition-colors"
                  >
                    Deep scan
                  </a>
                  <a
                    href={p.quick}
                    className="flex-1 rounded-full border border-border bg-background/60 px-4 py-2.5 text-center text-sm font-semibold hover:border-foreground transition-colors"
                  >
                    Quick scan
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section id="trust" className="px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {trust.map((t, i) => {
            const Icon = t.icon;
            return (
              <div
                key={t.title}
                className="rounded-3xl border border-border bg-card p-7 hover-lift animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-bold">{t.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{t.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="relative overflow-hidden px-6 py-24 md:px-10">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-peach/40 to-transparent" />
        <div className="relative mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-primary">
              Process
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              How it works
            </h2>
            <p className="mt-4 text-ink-soft md:text-lg">
              Four steps. Ninety seconds. Zero fluff. You keep control the whole
              way through.
            </p>
          </div>

          <ol className="mt-14 grid gap-5 md:grid-cols-4">
            {steps.map((s, i) => (
              <li
                key={s.n}
                className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 hover-lift animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="absolute right-4 top-4 font-display text-5xl font-bold text-primary/15">
                  {s.n}
                </div>
                <div className="relative">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {i + 1}
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-10 text-xs text-muted-foreground">
            By connecting, you agree to our read-only access policy.{" "}
            <a href="/privacy" className="underline underline-offset-4 hover:text-primary">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-ember p-10 text-primary-foreground shadow-glow md:p-16">
          <div className="grid items-center gap-10 md:grid-cols-[1.3fr_1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] opacity-80">
                Ready?
              </p>
              <h2 className="mt-3 text-4xl font-bold leading-[1.05] md:text-5xl">
                Stop fighting fires. See your chaos score in 90 seconds.
              </h2>
              <p className="mt-5 max-w-xl text-base opacity-90 md:text-lg">
                Same identity. Same team. This scanner is the diagnostic arm of
                OpsLab — run it once and you'll know exactly what's leaking
                margin, time, and team energy.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/connect"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-foreground hover:bg-background/90 transition"
                >
                  Start Your Scan <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="/quick-scan"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-primary-foreground backdrop-blur hover:bg-white/20 transition"
                >
                  Quick Scan →
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
      </section>

      <Footer />
    </div>
  );
}
