import { defineConfig } from "vite";

export default defineConfig({
  root: "public", // Set the root directory to public
  build: {
    outDir: "dist", // Output directory relative to root
    rollupOptions: {
      input: {
        main: "public/index.html", // Entry point for the build
        draw: "public/draw.html",
        error: "public/error.html",
      },
    },
  },
});
