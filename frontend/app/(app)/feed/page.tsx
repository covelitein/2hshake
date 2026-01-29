import { Heart, MessageSquare, Repeat2 } from "lucide-react";

import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { Navbar } from "@/components/navbar";

const feedItems = [
  {
    id: "1",
    message: "MR Covey contributed ₦5,000 to Weekend Trip Circle",
    timestamp: "2h ago",
    privacy: "Circle-only"
  },
  {
    id: "2",
    message: "Bill split settled: Dinner at Nexus",
    timestamp: "4h ago",
    privacy: "Followers"
  },
  {
    id: "3",
    message: "Goal reached: New Laptop Fund",
    timestamp: "Yesterday",
    privacy: "Private"
  }
];

export default function FeedPage() {
  return (
    <div className="min-h-screen bg-mist dark:bg-slate-950">
      <Navbar />
      <main className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-4 py-12">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold">Home feed</h1>
            <p className="text-sm text-slate-500 dark:text-slate-300">Live circle activity with privacy controls.</p>
          </div>
          <Button variant="accent">New post</Button>
        </div>
        <div className="grid gap-4">
          {feedItems.map((item) => (
            <Card key={item.id} className="space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>{item.privacy}</span>
                <span>{item.timestamp}</span>
              </div>
              <p className="text-lg font-semibold">{item.message}</p>
              <div className="flex items-center gap-4 text-sm text-slate-500">
                <button className="flex items-center gap-2">
                  <Heart size={16} /> 18
                </button>
                <button className="flex items-center gap-2">
                  <MessageSquare size={16} /> 6
                </button>
                <button className="flex items-center gap-2">
                  <Repeat2 size={16} /> 2
                </button>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
