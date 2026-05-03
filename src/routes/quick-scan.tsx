import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Cursor } from "@/components/site/Cursor";
import { ChatWidget } from "@/components/site/ChatWidget";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/quick-scan")({
  component: QuickScan,
  head: () => ({
    meta: [
      { title: "Quick Scan — OpsLab Chaos Scanner" },
      { name: "description", content: "Two-minute self-assessment. No connections required." },
    ],
  }),
});

function QuickScan() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Cursor />
      <Nav />
      <main className="mx-auto max-w-3xl px-6 pt-24 pb-32 md:px-10">
        <p className="text-[0.68rem] uppercase tracking-[0.28em] text-primary">Quick scan</p>
        <h1 className="mt-3 text-4xl font-bold md:text-5xl">Two minutes. No connections.</h1>
        <p className="mt-5 text-ink-soft md:text-lg">
          Answer 12 short questions and get a directional Chaos Score with the top
          three friction points to investigate next.
        </p>
        <Link
          to="/connect"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow"
        >
          Run a Deep Scan instead <ArrowRight className="h-4 w-4" />
        </Link>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
