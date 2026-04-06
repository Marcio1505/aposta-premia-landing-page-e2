import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // Caminhos relativos para funcionar abrindo o index.html direto ou via Live Server
  base: "./",
  plugins: [react()],
  build: {
    outDir: "dist",
  },
});
