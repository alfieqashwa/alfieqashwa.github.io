import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://alfieqashwa.github.io",
  base: "/",
  output: "static",
  
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ["astro:content"],
    },
  },

  integrations: [
    react(),
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: {
        theme: 'github-dark',
        wrap: true,
      },
    }),
    sitemap({
      filter: (page) => !page.includes('/encrypted/'),
      customPages: [
        'https://alfieqashwa.github.io/',
        'https://alfieqashwa.github.io/projects',
        'https://alfieqashwa.github.io/blog',
        'https://alfieqashwa.github.io/about',
        'https://alfieqashwa.github.io/tags',
      ],
    }),
  ],
});
