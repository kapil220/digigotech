import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.shortName,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f4f6fc",
    theme_color: "#0060f8",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
