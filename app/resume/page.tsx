import type { Metadata } from "next";
import { Download } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "@/components/section-heading";
import { AnchorButton } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Resume",
  description: `Download or preview ${siteConfig.name}'s resume.`,
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
      <SectionHeading eyebrow="Resume" title="my" accent="resume" />

      <Reveal>
        <div className="mb-8 flex justify-center">
          <AnchorButton
            href={siteConfig.resume.path}
            download={siteConfig.resume.fileName}
          >
            <Download size={16} /> Download CV
          </AnchorButton>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <Card className="overflow-hidden p-2 sm:p-4">
          <object
            data={siteConfig.resume.path}
            type="application/pdf"
            className="h-[75vh] w-full rounded-xl"
          >
            <div className="flex h-[50vh] flex-col items-center justify-center gap-4 p-8 text-center text-fg-muted">
              <p>
                Your browser can&apos;t preview PDFs inline. Use the download
                button above to view the resume.
              </p>
            </div>
          </object>
        </Card>
      </Reveal>
    </div>
  );
}
