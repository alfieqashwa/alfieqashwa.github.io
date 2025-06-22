import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://alfieqashwa.github.io",
  base: "/",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
