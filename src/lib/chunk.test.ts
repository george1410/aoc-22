import chunk from "./chunk";

describe("chunk", () => {
  it("chunks when it fits evenly", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const output = chunk(3, arr);

    expect(output).toEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);
  });

  it("chunks when it doesnt fit evenly", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const output = chunk(4, arr);

    expect(output).toEqual([[1, 2, 3, 4], [5, 6, 7, 8], [9]]);
  });
});
