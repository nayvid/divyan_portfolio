"use client";

import { useEffect, useState } from "react";

export function Typewriter({
  words,
  typingSpeed = 70,
  deletingSpeed = 40,
  pauseMs = 1600,
}: {
  words: readonly string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseMs?: number;
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">(
    "typing",
  );

  useEffect(() => {
    const current = words[wordIndex % words.length];

    if (phase === "typing") {
      if (text.length < current.length) {
        const t = setTimeout(
          () => setText(current.slice(0, text.length + 1)),
          typingSpeed,
        );
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setPhase("pausing"), pauseMs);
      return () => clearTimeout(t);
    }

    if (phase === "pausing") {
      const t = setTimeout(() => setPhase("deleting"), 0);
      return () => clearTimeout(t);
    }

    if (text.length > 0) {
      const t = setTimeout(
        () => setText(current.slice(0, text.length - 1)),
        deletingSpeed,
      );
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setPhase("typing");
      setWordIndex((i) => (i + 1) % words.length);
    }, 0);
    return () => clearTimeout(t);
  }, [text, phase, wordIndex, words, typingSpeed, deletingSpeed, pauseMs]);

  return (
    <span className="inline-flex items-center">
      {text}
      <span
        aria-hidden
        className="ml-1 inline-block h-[1em] w-[2px] animate-pulse bg-accent align-middle"
      />
    </span>
  );
}
