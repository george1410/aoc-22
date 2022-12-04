import range from "./range";

describe("range", () => {
  it("works when start value is 0", () => {
    expect(range(0, 5)).toEqual([0, 1, 2, 3, 4]);
  });

  it("works when start value is not 0", () => {
    expect(range(5, 10)).toEqual([5, 6, 7, 8, 9]);
  });
});
