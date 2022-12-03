import desc from "./desc";

describe("desc", () => {
  it("returns empty array if passed an empty array", () => {
    expect([]).toEqual([]);
  });

  it("returns array in descending order", () => {
    expect(desc([3, 4, 1, 2])).toEqual([4, 3, 2, 1]);
  });
});
