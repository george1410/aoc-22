export default <T>(xs: T[], ys: T[]) => [
  ...new Set(xs.filter((x) => ys.includes(x))),
];
