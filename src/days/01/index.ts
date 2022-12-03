import { Solution } from "../../types";
import desc from "../../lib/desc";
import max from "../../lib/max";
import { splitByEmptyLine, splitByLine } from "../../lib/split";
import sum from "../../lib/sum";
import take from "../../lib/take";

const solution: Solution = (input) => {
  const caloriesPerElf = splitByEmptyLine(input)
    .map((elf) => splitByLine(elf).map(Number))
    .map(sum);

  const maxCalories = max(caloriesPerElf);

  const topThreeTotal = sum(take(3, desc(caloriesPerElf)));

  return [maxCalories, topThreeTotal];
};

export default solution;
