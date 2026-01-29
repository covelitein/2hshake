import { ArrowUpRight, ShieldCheck, Sparkles, Users } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { Navbar } from "@/components/navbar";

const features = [
  {
    title: "A premium social ledger",
    description: "Every transfer, split, or contribution posts cleanly to a double-entry ledger with instant reconciliation.",
    icon: ShieldCheck
  },
  {
    title: "Circles that feel human",
    description: "Group savings, rotating contributions, and shared goals wrapped in calm, social storytelling.",
    icon: Users
  },
  {
    title: "Feed-first transparency",
    description: "A private social feed with receipt cards, reactions, and role-aware visibility layers.",
    icon: Sparkles
  }
];

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-mist to-mist dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
      <Navbar />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 pb-24 pt-16">
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-500 shadow-soft dark:bg-slate-900/70">
              Calm, premium social finance
            </p>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-ink dark:text-white md:text-5xl">
              Circles helps friends and communities coordinate money beautifully.
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Run savings goals, split bills, and send micro-transfers with social transparency. All in test mode, ready for
              production-grade providers when you are.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="accent">Start your circle</Button>
              <Button variant="ghost">See demo flow</Button>
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
              <div>
                <p className="font-semibold text-ink dark:text-white">₦48.2m</p>
                <p>Simulated ledger volume</p>
              </div>
              <div>
                <p className="font-semibold text-ink dark:text-white">2.8k</p>
                <p>Community members</p>
              </div>
              <div>
                <p className="font-semibold text-ink dark:text-white">99.98%</p>
                <p>Auto-reconciled entries</p>
              </div>
            </div>
          </div>
          <Card className="space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Featured receipt</p>
              <h3 className="text-2xl font-semibold">Weekend Trip Circle</h3>
              <p className="text-sm text-slate-500">Rotating contribution • Next payout in 2 days</p>
            </div>
            <div className="grid gap-4 rounded-2xl bg-white/70 p-4 dark:bg-slate-900/60">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Total saved</p>
                  <p className="text-2xl font-semibold">₦480,000</p>
                </div>
                <Button variant="ghost">View</Button>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">This week</span>
                  <span className="font-semibold text-ink dark:text-white">₦24,000 / ₦30,000</span>
                </div>
                <div className="h-2 rounded-full bg-calm/60">
                  <div className="h-2 w-4/5 rounded-full bg-accent" />
                </div>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-ink/5 px-4 py-3 text-sm dark:bg-white/5">
                <span>Amaka paid her share</span>
                <span className="font-semibold">₦6,000</span>
              </div>
            </div>
          </Card>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="space-y-4">
              <feature.icon className="text-accent" />
              <div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-300">{feature.description}</p>
              </div>
            </Card>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="space-y-4">
            <h2 className="text-2xl font-semibold">Built for real money movement</h2>
            <p className="text-sm text-slate-500 dark:text-slate-300">
              Ledger-first architecture, idempotent transfers, escrow locking, and audit-ready statements. Circles is a
              fintech core with social magic layered on top.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/feed" className="text-sm font-semibold text-accent">
                Explore the feed <ArrowUpRight className="inline h-4 w-4" />
              </Link>
              <Link href="/wallet" className="text-sm font-semibold text-accent">
                View wallet demo <ArrowUpRight className="inline h-4 w-4" />
              </Link>
            </div>
          </Card>
          <Card className="space-y-4">
            <h3 className="text-lg font-semibold">Security & trust stack</h3>
            <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-300">
              <li>Argon2 password hashing, refresh token rotation, device sessions.</li>
              <li>Rate limits + reporting workflows for sensitive actions.</li>
              <li>Structured logs, request IDs, and trace-friendly webhooks.</li>
            </ul>
            <Button variant="accent" className="w-full">
              Request early access
            </Button>
          </Card>
        </section>
      </main>
    </div>
  );
}
