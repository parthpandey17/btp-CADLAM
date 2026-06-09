import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const srcRoot = path.resolve(__dirname, "src");

export default defineConfig({
  root: __dirname,
  plugins: [react()],
  publicDir: path.resolve(__dirname, "public"),
  resolve: {
    alias: {
      "@": srcRoot,
      "next/link": path.resolve(__dirname, "src/compat/next-link.jsx"),
      "next/image": path.resolve(__dirname, "src/compat/next-image.jsx"),
      "next/navigation": path.resolve(__dirname, "src/compat/next-navigation.js"),
    },
  },
  css: {
    postcss: path.resolve(__dirname, "postcss.config.js"),
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
