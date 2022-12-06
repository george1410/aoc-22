import fs from "fs";
import path from "path";

import solution from ".";

const input = fs
  .readFileSync(path.join(__dirname, "fixtures", "testInput"))
  .toString()
  .trimEnd();

describe("day5", () => {
  it("returns correct solution for part 1", () => {
    const [part1] = solution(input);

    expect(part1).toEqual("CMZ");
  });

  it("returns correct solution for part 2", () => {
    const [, part2] = solution(input);

    expect(part2).toEqual("MCD");
  });
});
