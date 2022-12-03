import len from "./len";

describe("len", () => {
  describe("array", () => {
    it("returns 0 if no elements", () => {
      expect(len([])).toEqual(0);
    });

    it("returns the number of elements", () => {
      expect(len([2, 4, 4, 8, 10])).toEqual(5);
    });
  });

  describe("string", () => {
    it("returns 0 if no characters", () => {
      expect(len("")).toEqual(0);
    });

    it("returns the number of characters", () => {
      expect(len("abcde")).toEqual(5);
    });
  });
});
