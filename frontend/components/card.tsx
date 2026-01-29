import type React from "react";

import { clsx } from "clsx";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={clsx(
        "glass rounded-2xl p-6 shadow-soft",
        className
      )}
      {...props}
    />
  );
}
