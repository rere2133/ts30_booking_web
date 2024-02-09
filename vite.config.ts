/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/ts30_booking_web/", // /ts30_booking_web/,
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.join(__dirname, "src"),
    },
  },
});
