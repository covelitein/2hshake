import type React from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";

const buttonStyles = cva(
  "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        primary: "bg-ink text-white hover:bg-slate-900",
        ghost: "bg-transparent text-ink hover:bg-calm/60 dark:text-white dark:hover:bg-slate-800/60",
        accent: "bg-accent text-white hover:bg-indigo-500"
      }
    },
    defaultVariants: {
      variant: "primary"
    }
  }
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonStyles>;

export function Button({ className, variant, ...props }: ButtonProps) {
  return <button className={clsx(buttonStyles({ variant }), className)} {...props} />;
}
