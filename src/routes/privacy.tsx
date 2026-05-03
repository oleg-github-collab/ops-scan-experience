import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Cursor } from "@/components/site/Cursor";
import { ChatWidget } from "@/components/site/ChatWidget";

export const Route = createFileRoute("/privacy")({
  component: Privacy,
  head: () => ({
    meta: [{ title: "Privacy — OpsLab Chaos Scanner" }],
  }),
});

function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Cursor />
      <Nav />
      <main className="mx-auto max-w-3xl px-6 pt-24 pb-32 md:px-10">
        <h1 className="text-4xl font-bold md:text-5xl">Privacy &amp; data handling</h1>
        <div className="mt-8 space-y-5 text-ink-soft md:text-lg">
          <p>Read-only access. Aggregated, anonymized signals only. Tokens wiped after analysis.</p>
          <p>All raw data auto-deletes within 72 hours. Delete instantly anytime from your dashboard.</p>
          <p>Contact <a className="text-primary underline-offset-4 hover:underline" href="mailto:janedavydiuk@opslab.uk">janedavydiuk@opslab.uk</a> to request deletion or export.</p>
        </div>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
