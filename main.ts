// Entry for make.fun competition:
// u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9
// "Roast the Smart Fridge: One Line, Best Laugh Wins"
//
// Writes the one-line roast to $MAKEFUN_OUTPUT_DIR/entry.txt
// (falls back to ./output/entry.txt when the env var is unset).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My smart fridge sends me a photo of my own leftovers every time I open a food delivery app.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(process.cwd(), "output");
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, LINE + "\n", "utf8");
  console.log(`wrote ${outPath}`);
}

main();
