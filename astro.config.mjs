// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Canonical host. Drives absolute URLs in canonical/OG tags, so it must match
  // what Cloudflare Pages serves — www, not the apex.
  site: "https://www.ollawrite.com",
  // Static: no server-side anything, so nothing to run at the edge.
  output: "static",
  build: {
    // /contact rather than /contact.html
    format: "directory",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
