import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project — a stray lockfile in the home
  // directory otherwise makes Next infer the wrong root.
  turbopack: {
    root: dirname(fileURLToPath(import.meta.url)),
  },
  images: {
    // Case-study photography. These are curated Unsplash placeholders —
    // swap the URLs in src/content/work.ts for real client imagery.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
