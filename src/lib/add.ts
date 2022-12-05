export default function add(x: number): (y: number) => number;
export default function add(x: number, y: number): number;

export default function add(
  x: number,
  y?: number
): number | ((y: number) => number) {
  if (typeof y !== "undefined") {
    return x + y;
  } else {
    return (y: number) => x + y;
  }
}
