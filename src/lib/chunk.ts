import drop from "./drop";
import len from "./len";
import take from "./take";

const chunk = <_, T>(chunkSize: number, xs: T[]): T[][] => {
  if (len(xs) <= chunkSize) return [xs];

  return [take(chunkSize, xs), ...chunk(chunkSize, drop(chunkSize, xs))];
};

export default chunk;
