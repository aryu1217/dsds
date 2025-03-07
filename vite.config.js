import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/r3f-study5/", // GitHub Pages 경로 설정 (필수)
});
