import min from "./min";

describe("min", () => {
  it("should return the smallest number in the array", () => {
    expect(min([2, 4, 3, 1])).toEqual(1);
  });

  it("should return the smallest number in the array if only one element", () => {
    expect(min([3])).toEqual(3);
  });

  it("should return Infinity if the array is empty", () => {
    expect(min([])).toEqual(Infinity);
  });
});
