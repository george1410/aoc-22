import max from "./max";

describe("max", () => {
  it("should return the biggest number in the array", () => {
    expect(max([2, 4, 3, 1])).toEqual(4);
  });

  it("should return the biggest number in the array if only one element", () => {
    expect(max([3])).toEqual(3);
  });

  it("should return -Infinity if the array is empty", () => {
    expect(max([])).toEqual(-Infinity);
  });
});
