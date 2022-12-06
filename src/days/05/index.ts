import { Solution } from "../../types";
import { splitByEmptyLine, splitByLine } from "../../lib/split";
import lead from "../../lib/lead";
import last from "../../lib/last";
import chunk from "../../lib/chunk";
import range from "../../lib/range";

type Stack = string[];
type Stacks = Record<string, Stack>;
type Instruction = { count: string; start: string; end: string };

const getStartingStacks = (startingPositions: string[]) =>
  startingPositions
    .map((row) => chunk(4, [...row]).map((x) => x.join("").match(/[A-Z]/)?.[0]))
    .reduceRight(
      (acc, cur) =>
        cur.reduce(
          (acc, cur, idx) => ({
            ...acc,
            [`${idx + 1}`]: cur
              ? [...(acc[`${idx + 1}`] ?? []), cur]
              : acc[`${idx + 1}`],
          }),
          acc
        ),
      {} as Stacks
    );

const topItems = (stacks: Stacks) => Object.values(stacks).map(last).join("");

const crateMover9000 = (stacks: Stacks, instructions: Instruction[]) =>
  instructions.reduce(
    (acc, { count, start, end }) =>
      range(0, Number(count)).reduce(
        (acc) => ({
          ...acc,
          [end]: [...acc[end], last(acc[start])],
          [start]: lead(acc[start]),
        }),
        acc
      ),
    stacks
  );

const crateMover9001 = (stacks: Stacks, instructions: Instruction[]) =>
  instructions.reduce((acc, { count, start, end }) => {
    const newStacks = { ...acc };
    const toMove = [];
    for (let i = 0; i < Number(count); i++) {
      toMove.push(last(newStacks[start]));
      newStacks[start] = lead(newStacks[start]);
    }
    newStacks[end] = [...newStacks[end], ...toMove.reverse()];
    return newStacks;
  }, stacks);

const solution: Solution = (input) => {
  const [startingPositionsInput, instructionsInput] = splitByEmptyLine(input);
  const startingPositions = lead(splitByLine(startingPositionsInput));

  const instructions = splitByLine(instructionsInput).map((instruction) => ({
    ...instruction.match(/move (?<count>\d+) from (?<start>\d+) to (?<end>\d+)/)
      ?.groups,
  })) as Instruction[];

  const start = getStartingStacks(startingPositions);

  const finalPositions = crateMover9000(start, instructions);
  const finalPositions2 = crateMover9001(start, instructions);

  return [topItems(finalPositions), topItems(finalPositions2)];
};

export default solution;
