import { defineConfig, moduleTools } from "@modern-js/module-tools";
import { tailwindcssPlugin } from "@modern-js/plugin-tailwindcss";

export default defineConfig({
  plugins: [moduleTools(), tailwindcssPlugin()],
  buildPreset: "npm-library",
  buildConfig: {
    style: {
      inject: true,
    },
  },
});
