import lead from "./lead";

describe("lead", () => {
  it("returns an empty array if passed empty array", () => {
    expect(lead([])).toEqual([]);
  });

  it("returns an empty array if passed an array with 1 element", () => {
    expect(lead([1])).toEqual([]);
  });

  it("returns an array without the last element", () => {
    expect(lead([1, 2, 3, 4])).toEqual([1, 2, 3]);
  });
});
