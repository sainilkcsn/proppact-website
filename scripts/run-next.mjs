import { spawn } from "child_process";
import { fileURLToPath } from "url";
import path from "path";

const mode = process.argv[2] === "build" ? "production" : "development";
const nextBin = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "node_modules",
  "next",
  "dist",
  "bin",
  "next"
);
const nextArgs = process.argv[2] === "build" ? ["build"] : ["dev"];

const child = spawn(process.execPath, [nextBin, ...nextArgs], {
  stdio: "inherit",
  env: {
    ...process.env,
    NODE_ENV: mode,
  },
});

child.on("exit", (code) => {
  process.exit(code ?? 1);
});
