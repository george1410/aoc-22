import last from "./last";

describe("last", () => {
  it("returns undefined if array is empty", () => {
    expect(last([])).toBeUndefined();
  });

  it("returns the element if passed an array with one element", () => {
    expect(last([1])).toEqual(1);
  });

  it("returns the last element if passed an array with many elements", () => {
    expect(last([1, 2, 3])).toEqual(3);
  });
});
