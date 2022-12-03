import asc from "./asc";

describe("asc", () => {
  it("returns empty array if passed an empty array", () => {
    expect([]).toEqual([]);
  });

  it("returns array in ascending order", () => {
    expect(asc([3, 4, 1, 2])).toEqual([1, 2, 3, 4]);
  });
});
