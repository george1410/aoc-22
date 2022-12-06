import { Solution } from "../../types";
import drop from "../../lib/drop";
import len from "../../lib/len";
import take from "../../lib/take";
import unique from "../../lib/unique";

const findPos = (items: Iterable<string>, count: number, pos = count): number =>
  len(unique(take(count, items))) === count
    ? pos
    : findPos(drop(1, items), count, pos + 1);

const solution: Solution = (input) => [findPos(input, 4), findPos(input, 14)];

export default solution;
