import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { Navbar } from "@/components/navbar";

export default function AuthPage() {
  return (
    <div className="min-h-screen bg-mist dark:bg-slate-950">
      <Navbar />
      <main className="mx-auto flex w-full max-w-lg flex-col gap-8 px-4 py-16">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-semibold">Welcome back</h1>
          <p className="text-sm text-slate-500 dark:text-slate-300">Sign in to manage your circles and wallet.</p>
        </div>
        <Card className="space-y-4">
          <div>
            <label className="text-xs font-semibold uppercase text-slate-500">Email</label>
            <input
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:border-accent focus:outline-none dark:border-slate-800 dark:bg-slate-900"
              placeholder="you@circles.app"
            />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase text-slate-500">Password</label>
            <input
              type="password"
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm focus:border-accent focus:outline-none dark:border-slate-800 dark:bg-slate-900"
              placeholder="••••••••"
            />
          </div>
          <Button variant="accent" className="w-full">
            Continue
          </Button>
          <p className="text-center text-xs text-slate-500">We will never share your credentials.</p>
        </Card>
      </main>
    </div>
  );
}
