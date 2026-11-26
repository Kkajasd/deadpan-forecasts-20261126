import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Tonight in Wobbleford: 3 cm of sideways rain, winds gusting to 74 km/h, and a 60% chance the mayor's umbrella inverts on live television.";

// Joke angle: a deadpan forecast for a city that does not exist — sideways rain plus the mayor's umbrella inverting on live TV delivers the absurdity with a straight face.
// Validation guard: the entry must be a single line of 1-160 chars.
{
  const line = "Tonight in Wobbleford: 3 cm of sideways rain, winds gusting to 74 km/h, and a 60% chance the mayor's umbrella inverts on live television.";
  if (!line || line.includes("\n") || line.length < 1 || line.length > 160) {
    throw new Error("entry line must be a single line of 1-160 chars");
  }
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
