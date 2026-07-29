import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  accent,
  className,
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-10", className)}>
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-semibold sm:text-4xl">
        {title} {accent && <span className="text-gradient">{accent}</span>}
      </h2>
    </div>
  );
}
