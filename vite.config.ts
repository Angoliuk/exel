import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  optimizeDeps: { exclude: ["firebase"] },
  plugins: [react(), svgr(), tsconfigPaths()],
});
