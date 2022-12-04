import drop from "./drop";
import head from "./head";
import unique from "./unique";

const common = <T>(
  xs: Iterable<T>,
  ys: Iterable<T>,
  ...rest: Iterable<T>[]
): T[] => {
  if (rest.length === 0)
    return unique([...xs].filter((x) => [...ys].includes(x)));

  return common(common(xs, ys), head(rest), ...drop(1, rest));
};

export default common;
