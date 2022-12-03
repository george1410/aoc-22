import common from "./common";

describe("common", () => {
  it("returns an empty array if there are no common elements", () => {
    const a = [1, 2, 3];
    const b = [4, 5, 6, 7];
    const c = [8, 9];

    expect(common(a, b, c)).toEqual([]);
  });

  it("returns an array of the common elements between 2 arrays", () => {
    const a = [1, 2, 3];
    const b = [3, 2, 6, 7];

    expect(common(a, b)).toEqual([2, 3]);
  });

  it("returns an array of the common elements between 3 arrays", () => {
    const a = [1, 2, 3];
    const b = [2, 3, 6, 7];
    const c = [3, 2, 7, 9, 1];

    expect(common(a, b)).toEqual([2, 3]);
  });
});
