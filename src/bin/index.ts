#!/usr/bin/env node
import { cli, define } from "gunshi";
import { syncRemoteNodeModules } from "../sync";
import { buildSrc } from "../build";

const sync = define({
  name: "sync",
  description:
    "sync `node_modules/@bloxd/types` to `remote/node_modules/@bloxd`",
  run() {
    syncRemoteNodeModules();
  },
});

const build = define({
  name: "build",
  description: "build `src` and overwrite `remote/`",
  run() {
    buildSrc();
  },
});

await cli(process.argv.slice(2), build, { subCommands: { sync } });
