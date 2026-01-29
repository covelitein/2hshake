import Link from "next/link";

import { Button } from "@/components/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-white/80 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/80">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Circles
        </Link>
        <nav className="flex items-center gap-3">
          <Link className="text-sm text-slate-600 hover:text-ink dark:text-slate-300" href="/feed">
            Feed
          </Link>
          <Link className="text-sm text-slate-600 hover:text-ink dark:text-slate-300" href="/wallet">
            Wallet
          </Link>
          <Link className="text-sm text-slate-600 hover:text-ink dark:text-slate-300" href="/circles/overview">
            Circles
          </Link>
          <ThemeToggle />
          <Button variant="accent">Open App</Button>
        </nav>
      </div>
    </header>
  );
}
