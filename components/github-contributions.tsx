"use client";

import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { siteConfig } from "@/lib/site-config";
import { Card } from "@/components/ui/card";
import { AnchorButton } from "@/components/ui/button";

const username = "nayvid";

export function GithubContributions() {
  const [failed, setFailed] = useState(false);

  return (
    <Card className="p-6 sm:p-8">
      {!failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://ghchart.rshah.org/9333ea/${username}`}
          alt={`${siteConfig.name}'s GitHub contribution graph`}
          className="mx-auto w-full max-w-2xl dark:invert-0"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="flex flex-col items-center gap-3 py-6 text-center text-fg-muted">
          <FaGithub size={28} />
          <p>Contribution graph is unavailable right now.</p>
          <AnchorButton
            href={siteConfig.social.github}
            target="_blank"
            rel="noreferrer"
            variant="outline"
          >
            View GitHub profile
          </AnchorButton>
        </div>
      )}
    </Card>
  );
}
