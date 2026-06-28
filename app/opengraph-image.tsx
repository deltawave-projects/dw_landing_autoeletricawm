import { ImageResponse } from "next/og";
import { site } from "@/lib/site-config";

export const alt = `${site.nome} — ${site.tagline}`;
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
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          backgroundImage:
            "radial-gradient(60% 60% at 50% 0%, rgba(209,32,39,0.25) 0%, rgba(10,10,10,0) 70%)",
          color: "white",
          fontFamily: "sans-serif",
          padding: "80px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 40,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#d12027",
            fontWeight: 700,
          }}
        >
          {site.cidade}
        </div>
        <div
          style={{
            fontSize: 92,
            fontWeight: 800,
            marginTop: 16,
            lineHeight: 1.05,
          }}
        >
          {site.nome}
        </div>
        <div
          style={{
            fontSize: 40,
            marginTop: 28,
            color: "rgba(255,255,255,0.75)",
          }}
        >
          {site.tagline}
        </div>
      </div>
    ),
    { ...size },
  );
}
