import { Quote } from "lucide-react";
import type { Testimonial } from "@/lib/site-config";
import { Card } from "@/components/ui/card";
import { StarRating } from "@/components/star-rating";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="flex h-full flex-col p-6">
      <Quote className="mb-3 text-accent/50" size={22} />
      <StarRating rating={testimonial.rating} className="mb-3" />
      <p className="flex-1 text-sm leading-relaxed text-fg-muted">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="mt-5 border-t border-border pt-3">
        <p className="text-sm font-semibold">{testimonial.name}</p>
      </div>
    </Card>
  );
}
