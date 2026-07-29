import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import type { Project } from "@/lib/site-config";
import { Card } from "@/components/ui/card";
import { AnchorButton } from "@/components/ui/button";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_20px_60px_-20px_var(--color-ring)]">
      <div className="relative aspect-video overflow-hidden border-b border-border">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 768px) 33vw, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-display text-lg font-semibold">{project.title}</h3>
        <p className="flex-1 text-sm leading-relaxed text-fg-muted">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <AnchorButton
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            variant="outline"
            className="text-xs"
          >
            <FaGithub size={14} /> GitHub
          </AnchorButton>
          {project.demoUrl && (
            <AnchorButton
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="text-xs"
            >
              <ExternalLink size={14} /> Live demo
            </AnchorButton>
          )}
        </div>
      </div>
    </Card>
  );
}
