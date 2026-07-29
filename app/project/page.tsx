import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Projects",
  description: `Recent projects built by ${siteConfig.name}.`,
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <SectionHeading eyebrow="Projects" title="My recent" accent="works" />
      <p className="-mt-6 mb-10 max-w-xl text-fg-muted">
        Here are a few projects I&apos;ve worked on recently.
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {siteConfig.projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.08}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
