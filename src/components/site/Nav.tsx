import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a
          href="https://www.opslab.uk/"
          target="_blank"
          rel="noreferrer"
          className="group flex items-baseline gap-2 font-display text-xl font-bold tracking-tight"
        >
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-primary animate-pulse-ring" />
          OpsLab
          <span className="text-sm font-normal text-muted-foreground">
            / Chaos Scanner
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm md:flex">
          <Link to="/connect" className="hover:text-primary transition-colors" activeProps={{ className: "text-primary" }}>
            Connect
          </Link>
          <Link to="/quick-scan" className="hover:text-primary transition-colors" activeProps={{ className: "text-primary" }}>
            Quick scan
          </Link>
          <Link to="/privacy" className="hover:text-primary transition-colors" activeProps={{ className: "text-primary" }}>
            Privacy
          </Link>
          <a
            href="https://www.opslab.uk/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover-lift"
          >
            opslab.uk <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </nav>
        <div className="flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs">
          <span>🇺🇦</span>
          <span className="font-medium tracking-wider">UA</span>
        </div>
      </div>
    </header>
  );
}
