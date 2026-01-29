import "@/styles/globals.css";

import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "Circles — Social finance, beautifully coordinated",
  description: "Circles is a premium social + fintech experience for group savings, splits, and micro-transfers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-mist text-ink dark:bg-slate-950 dark:text-white">
        {children}
      </body>
    </html>
  );
}
