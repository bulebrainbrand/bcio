import fs, { rmSync } from "node:fs";
import path from "node:path";
export const buildSrc = () => {
  const files = fs.globSync("remote/**/*", {
    exclude: [
      "remote/tsconfig.json",
      "remote/node_modules/**",
      "remote/index.{ts,js}",
    ],
  });
  files.forEach((file) => fs.rmSync(file));
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
