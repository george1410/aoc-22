import fs from "fs";
import path from "path";

import days from "./days";
import { Day, daysOfAoc } from "./types";

const day = process.argv[2] as Day;

const runDay = (day: Day) => {
  const input = fs
    .readFileSync(path.join(process.cwd(), "inputs", day))
    .toString()
    .trimEnd();

  const output = days[day](input);

  console.log(`Day ${day} (Part 1):`, output[0]);
  console.log(`Day ${day} (Part 2):`, output[1]);
};

const runAllDays = () => {
  for (const day of daysOfAoc) {
    runDay(day);
    console.log();
  }
};

if (day) {
  runDay(day);
} else {
  runAllDays();
}
