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

  fs.writeFileSync(path.join(process.cwd(), "inputs", "999"), data);

  fs.mkdirSync(path.join(process.cwd(), "src", "days", "999"));
  fs.mkdirSync(path.join(process.cwd(), "src", "days", "999", "fixtures"));
  fs.writeFileSync(
    path.join(process.cwd(), "src", "days", "999", "fixtures", "testInput"),
    ""
  );

  const src = fs
    .readFileSync(path.join(__dirname, "template", "index.ts__tmpl__"))
    .toString();

  fs.writeFileSync(
    path.join(process.cwd(), "src", "days", "999", "index.ts"),
    src
  );

  const test = fs
    .readFileSync(path.join(__dirname, "template", "{day}.test.ts__tmpl__"))
    .toString();

  test.replace(/<% .* %>/g, day);

  fs.writeFileSync(
    path.join(process.cwd(), "src", "days", "999", `${day}.test.ts`),
    test
  );

  console.log("created files successfully!");
})();
