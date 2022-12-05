export default (start: number, end: number, step = 1) =>
  [...Array((end - start) / step).keys()].map((x) => x * step + start);
