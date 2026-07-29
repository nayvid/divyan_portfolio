import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Typewriter } from "@/components/typewriter";
import { TiltCard } from "@/components/tilt-card";
import { SocialLinks } from "@/components/social-links";
import { Reveal } from "@/components/reveal";
import { LinkButton } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden px-6 pb-24 pt-16 sm:pt-24">
        <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
          <Reveal>
            <p className="mb-4 text-lg text-fg-muted">
              hi there{" "}
              <span className="wave" role="img" aria-label="waving hand">
                👋🏻
              </span>
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
              I&apos;m <span className="text-gradient">{siteConfig.name}</span>
            </h1>
            <p className="mt-4 h-8 text-xl font-medium text-accent sm:text-2xl">
              <Typewriter words={siteConfig.typewriterRoles} />
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <LinkButton href="/project">View my work</LinkButton>
              <LinkButton href="/resume" variant="outline">
                Resume
              </LinkButton>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <Image
              src="/assets/home-main.svg"
              alt="Illustration of a developer at work"
              width={520}
              height={420}
              priority
              className="mx-auto w-full max-w-md"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border px-6 py-20">
        <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-[1fr_auto]">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              my <span className="text-gradient">introduction</span>
            </h2>
            <p className="mt-6 max-w-2xl leading-relaxed text-fg-muted">
              {siteConfig.bio.intro}
            </p>
            <div className="mt-8">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-fg-muted">
                Locate me
              </h3>
              <SocialLinks />
            </div>
            <Link
              href="/about"
              className="mt-6 inline-block text-sm font-medium text-accent hover:underline"
            >
              More about me →
            </Link>
          </Reveal>

          <Reveal delay={0.15}>
            <TiltCard className="mx-auto w-48 sm:w-56">
              <Image
                src="/assets/avatar.svg"
                alt={siteConfig.name}
                width={220}
                height={220}
                className="w-full rounded-2xl border border-border bg-bg-elevated"
              />
            </TiltCard>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
