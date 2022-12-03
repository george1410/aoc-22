import head from "./head";

describe("head", () => {
  it("returns the first element of the array", () => {
    expect(head([2, 4, 6, 8])).toEqual(2);
  });

  it("returns undefined if the array is empty", () => {
    expect(head([])).toBeUndefined();
  });
});
