import add from "./add";

export default (xs: number[]) => xs.reduce(add, 0);
