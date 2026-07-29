import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const links = [
  { href: siteConfig.social.github, label: "GitHub", icon: FaGithub },
  { href: siteConfig.social.linkedin, label: "LinkedIn", icon: FaLinkedinIn },
  { href: siteConfig.social.instagram, label: "Instagram", icon: FaInstagram },
];

export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn("flex items-center gap-3", className)}>
      {links.map(({ href, label, icon: Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-fg-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-[0_8px_20px_-8px_var(--color-ring)]"
          >
            <Icon size={16} />
          </a>
        </li>
      ))}
    </ul>
  );
}
