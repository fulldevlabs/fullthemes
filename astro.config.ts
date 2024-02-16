import sitemap from "@astrojs/sitemap";
import { fulluiIntegration } from "@fulldevlabs/fullui/src/integration/fullui";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";
// @ts-ignore
import bookshop from "@bookshop/astro-bookshop";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: import.meta.env?.PUBLIC_APP_URL || "https://localhost:4321",
  integrations: [
    sitemap(),
    robotsTxt(),
    bookshop(),
    fulluiIntegration({
      scheme: "light",
      hue: {
        base: "mauve",
        accent: "jade",
      },
    }),
  ],
  vite: {
    build: {
      rollupOptions: {
        external: ["astro:content"],
      },
    },
  },
});
