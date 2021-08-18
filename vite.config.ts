import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import tsconfigPaths from "vite-tsconfig-paths";
import config from "./src/App/Config";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  define: {
    // For eui to work
    global: "globalThis",

    _CONFIG_: JSON.stringify(config(mode === "production")),
  },
  plugins: [tsconfigPaths(), reactRefresh()],
}));
