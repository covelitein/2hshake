import * as Tabs from "@radix-ui/react-tabs";

import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { Navbar } from "@/components/navbar";

const members = ["Amaka", "Tobi", "Covey", "Priya"];

export default function CircleDetailPage() {
  return (
    <div className="min-h-screen bg-mist dark:bg-slate-950">
      <Navbar />
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold">Weekend Trip Circle</h1>
            <p className="text-sm text-slate-500 dark:text-slate-300">Goal-based savings + rotating contributions.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost">Invite</Button>
            <Button variant="accent">New split</Button>
          </div>
        </div>

        <Card className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase text-slate-500">Savings goal</p>
              <p className="text-2xl font-semibold">₦1,200,000</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-500">Raised</p>
              <p className="text-lg font-semibold">₦840,000</p>
            </div>
          </div>
          <div className="h-2 rounded-full bg-calm/70">
            <div className="h-2 w-3/4 rounded-full bg-accent" />
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-300">
            4 members contributing ₦60,000 each per week. Next payout: Thursday.
          </p>
        </Card>

        <Tabs.Root defaultValue="activity" className="space-y-6">
          <Tabs.List className="flex flex-wrap gap-2">
            {[
              { value: "activity", label: "Activity" },
              { value: "members", label: "Members" },
              { value: "goal", label: "Savings Goal" },
              { value: "splits", label: "Splits" },
              { value: "contributions", label: "Contributions" }
            ].map((tab) => (
              <Tabs.Trigger
                key={tab.value}
                value={tab.value}
                className="rounded-full border border-slate-200 px-4 py-2 text-sm data-[state=active]:bg-ink data-[state=active]:text-white dark:border-slate-800"
              >
                {tab.label}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          <Tabs.Content value="activity">
            <Card className="space-y-4">
              <p className="text-sm text-slate-500">Latest updates</p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Tobi contributed ₦60,000</span>
                  <span className="text-sm text-slate-500">2h ago</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Split created: Staycation villa</span>
                  <span className="text-sm text-slate-500">Yesterday</span>
                </div>
              </div>
            </Card>
          </Tabs.Content>
          <Tabs.Content value="members">
            <Card className="space-y-3">
              <p className="text-sm text-slate-500">Members ({members.length})</p>
              <div className="flex flex-wrap gap-2">
                {members.map((member) => (
                  <span key={member} className="rounded-full bg-white/80 px-4 py-2 text-sm dark:bg-slate-900/70">
                    {member}
                  </span>
                ))}
              </div>
            </Card>
          </Tabs.Content>
          <Tabs.Content value="goal">
            <Card className="space-y-3">
              <p className="text-sm text-slate-500">Goal insights</p>
              <p className="text-lg font-semibold">On track to hit 6 weeks early.</p>
              <p className="text-sm text-slate-500 dark:text-slate-300">Projected completion: October 12.</p>
            </Card>
          </Tabs.Content>
          <Tabs.Content value="splits">
            <Card className="space-y-3">
              <p className="text-sm text-slate-500">Active splits</p>
              <div className="flex items-center justify-between">
                <span className="font-semibold">Staycation villa</span>
                <Button variant="ghost">Review</Button>
              </div>
            </Card>
          </Tabs.Content>
          <Tabs.Content value="contributions">
            <Card className="space-y-3">
              <p className="text-sm text-slate-500">Contribution schedule</p>
              <div className="flex items-center justify-between">
                <span className="font-semibold">Next cycle</span>
                <span className="text-sm text-slate-500">₦60,000 per member</span>
              </div>
            </Card>
          </Tabs.Content>
        </Tabs.Root>
      </main>
    </div>
  );
}
