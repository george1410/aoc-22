import sum from "./sum";

describe("sum", () => {
  it("adds the numbers in the array", () => {
    const arr = [3, 10, 4, 2];

    expect(sum(arr)).toEqual(19);
  });

  it("returns 0 when array is empty", () => {
    expect(sum([])).toEqual(0);
  });

  it("returns the value when the array contains only 1 element", () => {
    expect(sum([10])).toEqual(10);
  });
});
