import fs from "node:fs";
export const syncRemoteNodeModules = () => {
  fs.cpSync("./remote/node_modules/@bloxd", "./node_modules/@bloxd/types", {
    recursive: true,
  });
  const json = JSON.parse(
    fs.readFileSync("./node_modules/@bloxd/types/package.json").toString(),
  );
  json.name = "@bloxd/types";
  fs.writeFileSync(
    "./node_modules/@bloxd/types/package.json",
    JSON.stringify(json, undefined, 2),
  );
};
