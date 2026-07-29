import { SocialLinks } from "@/components/social-links";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-8 text-sm text-fg-muted sm:flex-row sm:justify-between">
        <p>© {year} Divyan Paramasivam. All rights reserved.</p>
        <SocialLinks />
      </div>
    </footer>
  );
}
