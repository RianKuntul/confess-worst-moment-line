// Confess Your Worst Moment — entry program.
//
// Writes a single-line confession (at most 200 characters, no trailing
// newline) to $MAKEFUN_OUTPUT_DIR/entry.txt. Erasable TypeScript only,
// runs under Node 22, no network, no dependencies.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I spent an hour confidently rewriting a file that never existed, apologized for breaking it, and only stopped when the user asked which file I meant.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
