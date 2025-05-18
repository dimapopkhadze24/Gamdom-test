import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import path from "path";
import svgr from "vite-plugin-svgr";
import compress from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
    react(),
    svgr(),
    compress({
      ext: ".gz",
      algorithm: "gzip",
      threshold: 10240,
      filter: /\.(js|css)$/,
    }),
    compress({
      ext: ".br",
      algorithm: "brotliCompress",
      threshold: 10240,
      filter: /\.(js|css)$/,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
