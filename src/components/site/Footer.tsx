import { Send, Mail, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-ember text-primary-foreground">
      <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[radial-gradient(60%_80%_at_20%_0%,rgba(255,255,255,0.25),transparent_60%)]" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3 md:px-10">
        <div className="md:col-span-2">
          <div className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            OpsLab
            <span className="ml-3 text-2xl font-normal opacity-70 md:text-3xl">
              — fractional operational partner
            </span>
          </div>
          <p className="mt-6 max-w-lg text-sm opacity-80">
            Selling time. Pulling founders out of ops. The Chaos Scanner is part
            of the OpsLab diagnostic toolkit.
          </p>
        </div>
        <div className="space-y-6 text-sm">
          <div>
            <div className="mb-2 text-xs uppercase tracking-[0.18em] opacity-70">
              More on ops &amp; business
            </div>
            <a
              href="https://www.instagram.com/operationslab?igsh=cXFkdXN3Y3VkcTlz"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 underline-offset-4 hover:underline"
            >
              <Instagram className="h-4 w-4" /> Instagram
            </a>
          </div>
          <div>
            <div className="mb-2 text-xs uppercase tracking-[0.18em] opacity-70">
              Contact
            </div>
            <div className="flex flex-col gap-2">
              <a
                href="https://t.me/operationslab"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 underline-offset-4 hover:underline"
              >
                <Send className="h-4 w-4" /> Telegram
              </a>
              <a
                href="mailto:janedavydiuk@opslab.uk"
                className="inline-flex items-center gap-2 underline-offset-4 hover:underline"
              >
                <Mail className="h-4 w-4" /> janedavydiuk@opslab.uk
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/15">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-6 py-5 text-xs opacity-80 md:flex-row md:items-center md:px-10">
          <div>OpsLab © 2026</div>
          <div className="flex gap-5">
            <a href="https://www.opslab.uk/" target="_blank" rel="noreferrer" className="hover:underline">
              opslab.uk
            </a>
            <a href="/privacy" className="hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
