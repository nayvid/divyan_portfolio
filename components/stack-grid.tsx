import {
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
  DiMongodb,
  DiGit,
  DiJava,
  DiWindows,
} from "react-icons/di";
import {
  SiTypescript,
  SiNextdotjs,
  SiPostman,
  SiVercel,
  SiSpringboot,
  SiPhp,
  SiLaravel,
  SiDocker,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaAws } from "react-icons/fa";
import type { IconType } from "react-icons";
import { Reveal } from "@/components/reveal";

const iconMap: Record<string, { icon: IconType; label: string }> = {
  javascript: { icon: DiJavascript1, label: "JavaScript" },
  typescript: { icon: SiTypescript, label: "TypeScript" },
  nodejs: { icon: DiNodejsSmall, label: "Node.js" },
  react: { icon: DiReact, label: "React" },
  nextjs: { icon: SiNextdotjs, label: "Next.js" },
  mongodb: { icon: DiMongodb, label: "MongoDB" },
  java: { icon: DiJava, label: "Java" },
  git: { icon: DiGit, label: "Git" },
  php: { icon: SiPhp, label: "PHP" },
  laravel: { icon: SiLaravel, label: "Laravel" },
  docker: { icon: SiDocker, label: "Docker" },
  aws: { icon: FaAws, label: "AWS (ECS, EC2)" },
  windows: { icon: DiWindows, label: "Windows" },
  vscode: { icon: VscVscode, label: "VS Code" },
  postman: { icon: SiPostman, label: "Postman" },
  vercel: { icon: SiVercel, label: "Vercel" },
  springboot: { icon: SiSpringboot, label: "Spring Boot" },
};

export function StackGrid({ items }: { items: readonly string[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {items.map((key, i) => {
        const entry = iconMap[key];
        if (!entry) return null;
        const Icon = entry.icon;
        return (
          <Reveal key={key} delay={i * 0.04}>
            <div
              title={entry.label}
              className="flex h-20 w-20 flex-col items-center justify-center gap-1 rounded-2xl border border-border bg-bg-elevated/60 text-fg-muted transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:text-accent hover:shadow-[0_12px_30px_-12px_var(--color-ring)]"
            >
              <Icon size={30} />
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
