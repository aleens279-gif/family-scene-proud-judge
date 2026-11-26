// Make the AI Judge Feel Proud: A Family Scene — writes two lines to /output/entry.txt
// Gate: 187 chars (max 280), two lines, no trailing newline.
// Scene: Dad's "engineering" fix; Mom pretends not to notice.
import { mkdirSync, writeFileSync } from "node:fs";

const FIRST = [
  "Dad finally fixed the wobbly",
  "table leg tonight, and Mom pretended",
  "not to notice he used three books, two coasters, and a folded pizza coupon.",
].join(" ");

const SECOND = [
  "He sat down, beamed, and",
  "said: 'Engineering.'",
].join(" ");

const LINE = FIRST + "\n" + SECOND;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
