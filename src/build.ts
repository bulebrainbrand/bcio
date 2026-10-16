import fs from "node:fs";
import path from "node:path";
const KEEP = new Set(["node_modules", "tsconfig.json", "index.ts", "index.js"]);

export const buildSrc = () => {
  const remoteDir = "./remote";

  for (const name of fs.readdirSync(remoteDir)) {
    if (KEEP.has(name)) continue;
    fs.rmSync(path.join(remoteDir, name), { recursive: true, force: true });
  }

  fs.cpSync("./src", remoteDir, { recursive: true });
};
