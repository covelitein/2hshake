import { ArrowDownLeft, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { Navbar } from "@/components/navbar";

const balances = [
  { currency: "NGN", amount: "₦124,500", detail: "Available" },
  { currency: "USD", amount: "$1,480", detail: "Available" },
  { currency: "USDT", amount: "1,900", detail: "Locked in escrow" }
];

const statement = [
  {
    id: "1",
    label: "Top up",
    amount: "+₦25,000",
    time: "Today 10:24",
    status: "Completed"
  },
  {
    id: "2",
    label: "Transfer to Amaka",
    amount: "-₦6,500",
    time: "Today 09:01",
    status: "Completed"
  },
  {
    id: "3",
    label: "Escrow lock • Dinner at Nexus",
    amount: "-₦4,800",
    time: "Yesterday",
    status: "Locked"
  }
];

export default function WalletPage() {
  return (
    <div className="min-h-screen bg-mist dark:bg-slate-950">
      <Navbar />
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold">Wallet</h1>
            <p className="text-sm text-slate-500 dark:text-slate-300">Balances across currencies and escrow status.</p>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost">Top up</Button>
            <Button variant="accent">Send</Button>
          </div>
        </div>
        <section className="grid gap-4 md:grid-cols-3">
          {balances.map((balance) => (
            <Card key={balance.currency} className="space-y-2">
              <p className="text-xs font-semibold uppercase text-slate-500">{balance.currency}</p>
              <p className="text-3xl font-semibold">{balance.amount}</p>
              <p className="text-sm text-slate-500 dark:text-slate-300">{balance.detail}</p>
            </Card>
          ))}
        </section>
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Statement</h2>
            <Button variant="ghost">Export</Button>
          </div>
          <Card className="space-y-4">
            {statement.map((row) => (
              <div key={row.id} className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4 last:border-none last:pb-0 dark:border-slate-800">
                <div>
                  <p className="font-semibold">{row.label}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-300">{row.time}</p>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="rounded-full bg-calm/70 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    {row.status}
                  </span>
                  <span className="font-semibold">{row.amount}</span>
                  {row.amount.startsWith("+") ? <ArrowDownLeft size={16} /> : <ArrowUpRight size={16} />}
                </div>
              </div>
            ))}
          </Card>
        </section>
      </main>
    </div>
  );
}
