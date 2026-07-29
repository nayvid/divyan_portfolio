import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "@/components/section-heading";
import { StackGrid } from "@/components/stack-grid";
import { GithubContributions } from "@/components/github-contributions";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { TiltCard } from "@/components/tilt-card";

export const metadata: Metadata = {
  title: "About",
  description: `More about ${siteConfig.name}, a ${siteConfig.role} based in ${siteConfig.location}.`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <SectionHeading eyebrow="About" title="know who" accent="I'm" />

      <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-start">
        <Reveal>
          <Card className="p-6 sm:p-8">
            <p className="leading-relaxed text-fg-muted">
              {siteConfig.bio.quote}
              <br />
              <br />
              {siteConfig.bio.role}
              <br />
              <br />
              Apart from developing projects, some other activities that I
              love to do:
            </p>
            <ul className="mt-4 space-y-2">
              {siteConfig.bio.activities.map((activity) => (
                <li
                  key={activity}
                  className="flex items-center gap-2 text-fg-muted"
                >
                  <span className="text-accent">›</span> {activity}
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-border pt-4 text-accent-soft italic">
              &ldquo;{siteConfig.bio.motto}&rdquo;
            </p>
            <footer className="mt-2 text-sm text-fg-muted">
              — {siteConfig.shortName}
            </footer>
          </Card>
        </Reveal>

        <Reveal delay={0.15}>
          <TiltCard className="mx-auto w-56 md:w-64">
            <Image
              src="/assets/about.png"
              alt="About illustration"
              width={280}
              height={280}
              className="w-full rounded-2xl border border-border bg-bg-elevated"
            />
          </TiltCard>
        </Reveal>
      </div>

      <div className="mt-20">
        <SectionHeading title="professional" accent="skillset" />
        <StackGrid items={siteConfig.techStack} />
      </div>

      <div className="mt-20">
        <h2 className="mb-10 font-display text-3xl font-semibold sm:text-4xl">
          <span className="text-gradient">tools</span> I use
        </h2>
        <StackGrid items={siteConfig.toolStack} />
      </div>

      <div className="mt-20">
        <SectionHeading title="GitHub" accent="contributions" />
        <GithubContributions />
      </div>
    </div>
  );
}
