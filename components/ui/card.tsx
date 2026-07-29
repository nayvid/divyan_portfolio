import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-bg-elevated/60 backdrop-blur-xl shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset] transition-colors",
        className,
      )}
      {...props}
    />
  );
}
