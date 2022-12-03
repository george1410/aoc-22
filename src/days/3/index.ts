import { Solution } from "../../types";
import { splitByLine } from "../../lib/split";
import common from "../../lib/common";
import drop from "../../lib/drop";
import head from "../../lib/head";
import len from "../../lib/len";
import take from "../../lib/take";
import sum from "../../lib/sum";
import chunk from "../../lib/chunk";

const priority = (char: string) =>
  char.charCodeAt(0) < 97 ? char.charCodeAt(0) - 38 : char.charCodeAt(0) - 96;

const solution: Solution = (input) => {
  const rucksacks = splitByLine(input);

  const compartments = rucksacks.map(([...rucksack]) => [
    take(len(rucksack) / 2, rucksack),
    drop(len(rucksack) / 2, rucksack),
  ]);

  const bothCompartments = compartments.flatMap(([xs, ys]) =>
    head(common(xs, ys))
  );

  const priorities = bothCompartments.map(priority);

  const groups = chunk(3, rucksacks);

  const allThree = groups.flatMap(([[...xs], [...ys], [...zs]]) =>
    head(common(common(xs, ys), zs))
  );

  const allThreePriorities = allThree.map(priority);

  return [sum(priorities), sum(allThreePriorities)];
};

export default solution;
