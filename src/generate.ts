import * as dotenv from "dotenv";
import axios from "axios";
import fs from "fs";
import path from "path";

import { Day } from "./types";

dotenv.config();

const day = process.argv[2] as Day;

(async () => {
  console.log("fetching input...");

  const { data } = await axios.get(
    `https://adventofcode.com/2022/day/${day}/input`,
    {
      headers: {
        Cookie: `session=${process.env.SESSION_TOKEN};`,
      },
    }
  );

  console.log("fetched input successfully!");

  console.log("creating files...");

  const paddedDay = Number(day) < 10 ? `0${day}` : day;
  fs.writeFileSync(path.join(process.cwd(), "inputs", day), data);

  fs.mkdirSync(path.join(process.cwd(), "src", "days", paddedDay));
  fs.mkdirSync(path.join(process.cwd(), "src", "days", paddedDay, "fixtures"));
  fs.writeFileSync(
    path.join(process.cwd(), "src", "days", paddedDay, "fixtures", "testInput"),
    ""
  );

  const src = fs
    .readFileSync(path.join(__dirname, "template", "index.ts__tmpl__"))
    .toString();

  fs.writeFileSync(
    path.join(process.cwd(), "src", "days", paddedDay, "index.ts"),
    src
  );

  const test = fs
    .readFileSync(path.join(__dirname, "template", "{day}.test.ts__tmpl__"))
    .toString();

  const replacedTest = test.replace(/<% .*? %>/, day);

  fs.writeFileSync(
    path.join(process.cwd(), "src", "days", paddedDay, `${day}.test.ts`),
    replacedTest
  );

  console.log("created files successfully!");
})();
