import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://alfieqashwa.github.io",
  base: "/",
  output: "static",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react(), mdx()],
});