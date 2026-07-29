import Link from "next/link";
import { LinkButton } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-6 py-32 text-center">
      <p className="font-display text-7xl font-bold text-gradient">404</p>
      <h1 className="mt-4 text-2xl font-semibold">Page not found</h1>
      <p className="mt-2 text-fg-muted">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <LinkButton href="/" className="mt-8">
        Back home
      </LinkButton>
      <Link href="/project" className="mt-4 text-sm text-accent hover:underline">
        Or browse projects →
      </Link>
    </div>
  );
}
