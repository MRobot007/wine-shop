import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base so the production build also works when opened from a
// sub-path or directly from the filesystem.
export default defineConfig({
  base: "./",
  plugins: [react()],
  server: { port: 5173, host: true },
});
