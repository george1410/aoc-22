export default (start: number, end: number) =>
  [...Array(end - start).keys()].map((x) => x + start);
