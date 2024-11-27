import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',  // Make sure this is set correctly based on your deployment path
  plugins: [react()],
});
