import add from "./add";

describe("add", () => {
  it("adds two numbers in uncurried form", () => {
    expect(add(3, 4)).toEqual(7);
  });

  it("adds two numbers in curried form", () => {
    expect(add(3)(4)).toEqual(7);

    const addOne = add(1);
    expect(addOne(3)).toEqual(4);
  });
});
