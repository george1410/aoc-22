import { splitByLine, splitBySpace } from "../../lib/split";
import { Solution } from "../../types";

type OpponentShape = "A" | "B" | "C";
type YourShape = "X" | "Y" | "Z";
type Round = [OpponentShape, YourShape];

const scores = {
  A: { X: 4, Y: 8, Z: 3 },
  B: { X: 1, Y: 5, Z: 9 },
  C: { X: 7, Y: 2, Z: 6 },
} as const;

const newScores = {
  A: { X: 3, Y: 4, Z: 8 },
  B: { X: 1, Y: 5, Z: 9 },
  C: { X: 2, Y: 6, Z: 7 },
} as const;

const solution: Solution = (input) => {
  const rounds = splitByLine(input).map(splitBySpace) as Round[];

  const score = rounds.reduce((acc, [opp, you]) => acc + scores[opp][you], 0);

  const newRulesScore = rounds.reduce(
    (acc, [opp, you]) => acc + newScores[opp][you],
    0
  );

  return [score, newRulesScore];
};

export default solution;
