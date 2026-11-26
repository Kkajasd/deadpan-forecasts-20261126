import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Tonight in Wobbleford: 3 cm of sideways rain, winds gusting to 74 km/h, and a 60% chance the mayor's umbrella inverts on live television.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
