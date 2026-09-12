import { defineConfig } from "vite-plus";
export default defineConfig({
  pack: {
    dts: true,
    platform: "node",
    entry: ["./src/bin/index.ts"],
  },
  test: {
    include: ["*.test.ts"],
  },
});
