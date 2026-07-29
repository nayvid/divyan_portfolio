import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-accent text-white shadow-[0_8px_30px_-8px_var(--color-ring)] hover:shadow-[0_12px_40px_-6px_var(--color-ring)] hover:-translate-y-0.5",
  outline:
    "border border-border text-fg hover:border-accent hover:text-accent",
  ghost: "text-fg-muted hover:text-fg hover:bg-fg/5",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 disabled:pointer-events-none disabled:opacity-50";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(baseClasses, variantClasses[variant], className)}
      {...props}
    />
  );
}

type LinkButtonProps = React.ComponentProps<typeof Link> & {
  variant?: Variant;
};

export function LinkButton({
  className,
  variant = "primary",
  ...props
}: LinkButtonProps) {
  return (
    <Link
      className={cn(baseClasses, variantClasses[variant], className)}
      {...props}
    />
  );
}

export function AnchorButton({
  className,
  variant = "primary",
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant }) {
  return (
    <a
      className={cn(baseClasses, variantClasses[variant], className)}
      {...props}
    />
  );
}
