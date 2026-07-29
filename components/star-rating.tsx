import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function StarRating({
  rating,
  max = 5,
  className,
}: {
  rating: number;
  max?: number;
  className?: string;
}) {
  return (
    <div
      className={cn("flex items-center gap-0.5", className)}
      role="img"
      aria-label={`${rating} out of ${max} stars`}
    >
      {Array.from({ length: max }, (_, i) => (
        <Star
          key={i}
          size={16}
          className={
            i < rating
              ? "fill-accent text-accent"
              : "fill-transparent text-fg-muted/40"
          }
        />
      ))}
    </div>
  );
}
