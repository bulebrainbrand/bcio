import fs, { rmSync } from "node:fs";
import path from "node:path";
export const buildSrc = () => {
  const files = fs.readdirSync("./remote");
  files.forEach((pathToChild) => {
    const stat = fs.statSync(pathToChild);
    if (stat.isDirectory()) {
      if (path.basename(pathToChild) === "node_modules") return;
      fs.rmdirSync(pathToChild);
    } else if (stat.isFile()) {
      const basename = path.basename(pathToChild);
      if (
        basename === "tsconfig.json" ||
        basename === "index.ts" ||
        basename === "index.js"
      )
        return;
    }
  });
  fs.readdirSync("./remote").forEach((pathToChild) => {
    if (
      fs.statSync(pathToChild).isDirectory() &&
      path.basename(pathToChild) !== "node_modules"
    ) {
      fs.rmdirSync(pathToChild);
    }
  });
  fs.cpSync("./src", "./remote", { recursive: true });
};
