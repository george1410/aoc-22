import drop from "./drop";

describe("drop", () => {
  it("returns an array with the first n elements removed", () => {
    expect(drop(2, [1, 2, 3, 4, 5])).toEqual([3, 4, 5]);
  });

  it("returns an empty array if the count to remove is equal to the number of elements", () => {
    expect(drop(5, [1, 2, 3, 4, 5])).toEqual([]);
  });

  it("returns an empty array if the count to remove is greater than the number of elements", () => {
    expect(drop(6, [1, 2, 3, 4, 5])).toEqual([]);
  });
});
