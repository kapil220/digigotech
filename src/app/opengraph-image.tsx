import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Share card for links pasted into WhatsApp, LinkedIn and the rest. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #041034 0%, #0a1f5c 60%, #0060f8 140%)",
          color: "#f4f7ff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 44, height: 2, background: "#00a3ff" }} />
          <div style={{ fontSize: 24, letterSpacing: 6, textTransform: "uppercase", color: "#9db8e8" }}>
            Indore, India
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>
            {site.name}
          </div>
          <div style={{ marginTop: 24, fontSize: 36, lineHeight: 1.3, color: "#c7d6f5", maxWidth: 960 }}>
            Websites, e-commerce, SaaS, ERP and AI agents, chatbots, voicebots
            and WhatsApp automation.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#9db8e8" }}>
          <div>nexopsdev.com</div>
          <div>{site.phone.display}</div>
        </div>
      </div>
    ),
    size
  );
}
