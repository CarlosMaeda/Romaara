import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Vercel sirve en la raiz (/), GitHub Pages bajo /Romaara/
  base: process.env.VERCEL ? "/" : "/Romaara/",
});
