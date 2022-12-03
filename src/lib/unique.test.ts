import unique from "./unique";

describe("unique", () => {
  describe("array", () => {
    it("returns empty array if passed empty array", () => {
      expect(unique([])).toEqual([]);
    });

    it("returns array with duplicate values removed", () => {
      expect(unique([3, 99, "a", 3, "b", 3, "b"])).toEqual([3, 99, "a", "b"]);
    });

    it("returns the same array if there are no duplicates", () => {
      expect(unique([4, 5, 2, 1])).toEqual([4, 5, 2, 1]);
    });
  });

  describe("string", () => {
    it("returns empty array if passed empty string", () => {
      expect(unique("")).toEqual([]);
    });

    it("returns array with duplicate characters removed", () => {
      expect(unique("abcbdde")).toEqual(["a", "b", "c", "d", "e"]);
    });

    it("returns the same array if there are no duplicates", () => {
      expect(unique("abcde")).toEqual(["a", "b", "c", "d", "e"]);
    });
  });
});
