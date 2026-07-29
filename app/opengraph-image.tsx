import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 96,
          background: "linear-gradient(135deg, #08050d 0%, #1a0f2e 100%)",
          color: "#f4f1f8",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#d8b4fe",
            display: "flex",
          }}
        >
          {siteConfig.role}
        </div>
        <div
          style={{
            fontSize: 80,
            fontWeight: 700,
            marginTop: 24,
            display: "flex",
            backgroundImage: "linear-gradient(120deg, #c084fc, #f472b6)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 30, marginTop: 24, color: "#a79fb5", display: "flex" }}>
          {siteConfig.location}
        </div>
      </div>
    ),
    size,
  );
}
