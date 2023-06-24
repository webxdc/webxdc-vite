import { defineConfig } from "vite";
import zipPack from "vite-plugin-zip-pack";

//@ts-ignore
import packageJson from "./package.json";

let version = "";
if (packageJson.version) {
  version = "_" + packageJson.version;
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    zipPack({
      outDir: "dist-xdc",
      outFileName: (packageJson.name || "app") + version + ".xdc",
    }),
  ],

  // https://github.com/vitest-dev/vitest
  test: {
    environment: "jsdom",
  },
});
