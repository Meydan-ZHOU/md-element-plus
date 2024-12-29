/*
 * @Author: zhoumeidan
 * @Date: 2024-12-29 16:17:41
 * @LastEditTime: 2024-12-29 17:02:06
 * @LastEditors: zhoumeidan
 * @Description:
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import {includes} from "lodash-es"

export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: "../../tsconfig.build.json",
      outDir: "dist/types",
    }),
  ],
  build: {
    outDir: "./dist/es",
    lib: {
      entry: resolve(__dirname, "../index.ts"),
      name: "MdElementPlus",
      fileName: "index",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") return "index.css";
          return assetInfo.name as string;
        },
        manualChunks(id){
          if (includes(id, "node_modules")) return "vendor";
          if (
            includes(id, "/packages/utils")
          )
            return "utils";
        }
      },
    },
  },
});
