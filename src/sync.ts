import fs from "node:fs";
export const syncRemoteNodeModules = () => {
  fs.cpSync("./remote/node_modules/@bloxd", "./node_modules/@bloxd/types", {
    recursive: true,
  });
  const json = JSON.parse(
    fs.readFileSync("./node_modules/@bloxd/types/package.json").toString(),
  );
  json.name = "@bloxd/types";
  json.types = undefined;
  json.exports = {
    ".": {
      types: "./index.d.ts",
    },
    "./global": {
      types: "./globals.d.ts",
    },
  };
  fs.writeFileSync(
    "./node_modules/@bloxd/types/globals.d.ts",
    fs
      .readFileSync("./node_modules/@bloxd/types/globals.d.ts")
      .toString()
      .replace("@bloxd", "@bloxd/types"),
  );
  fs.writeFileSync(
    "./node_modules/@bloxd/types/package.json",
    JSON.stringify(json, undefined, 2),
  );
};
