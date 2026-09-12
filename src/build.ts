import fs from "node:fs";
export const buildSrc = () => {
  fs.cpSync("./src", "./remote", { recursive: true });
};
