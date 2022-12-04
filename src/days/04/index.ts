import { Solution } from "../../types";
import { splitByComma, splitByLine } from "../../lib/split";
import range from "../../lib/range";
import common from "../../lib/common";
import len from "../../lib/len";
import min from "../../lib/min";

const solution: Solution = (input) => {
  const pairs = splitByLine(input)
    .map(splitByComma)
    .map((pair) =>
      pair.map((elfRange) => {
        const [start, end] = elfRange.split("-").map(Number);
        return range(start, end + 1);
      })
    );

  const inBoth = pairs.map(([a, b]) => common(a, b));

  const fullOverlaps = pairs.filter(
    ([a, b], i) => len(inBoth[i]) === min([len(a), len(b)])
  );

  const anyOverlaps = inBoth.filter(len);

  return [len(fullOverlaps), len(anyOverlaps)];
};

export default solution;
