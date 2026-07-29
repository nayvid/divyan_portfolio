"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-6 py-32 text-center">
      <h1 className="font-display text-2xl font-semibold">
        Something went wrong
      </h1>
      <p className="mt-2 text-fg-muted">
        An unexpected error occurred while loading this page.
      </p>
      <Button className="mt-8" onClick={() => reset()}>
        Try again
      </Button>
    </div>
  );
}
