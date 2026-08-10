// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  // Canonical host. Used for absolute URLs in sitemap.xml and OG tags, so it
  // must match what Cloudflare Pages actually serves — www, not the apex.
  site: "https://www.ollawrite.com",
  // Static output: this is two pages with no server-side anything, so there is
  // nothing to run at the edge and nothing to keep patched.
  output: "static",
  build: {
    // /contact rather than /contact.html
    format: "directory",
  },
});
