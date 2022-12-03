import split from "./split";

describe("split", () => {
  it("should split the string by the separator", () => {
    expect(split(" ", "my name is george")).toEqual([
      "my",
      "name",
      "is",
      "george",
    ]);
  });
});
