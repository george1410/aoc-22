import take from "./take";

describe("take", () => {
  it("returns the first n elements of the array", () => {
    expect(take(2, [1, 2, 3, 4, 5])).toEqual([1, 2]);
  });

  it("returns all elements if there are not enough elements in the array", () => {
    expect(take(7, [1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("returns and empty array if passed an empty array", () => {
    expect(take(2, [])).toEqual([]);
  });

  it("works on other iterables", () => {
    expect(take(2, "abcde")).toEqual(["a", "b"]);
  });
});
