export type Result = string | number;
export type Solution = (input: string) => [Result, Result];

export const daysOfAoc = [
  "1",
  "2",
  "3",
  //   "4",
  //   "5",
  //   "6",
  //   "7",
  //   "8",
  //   "9",
  //   "10",
  //   "11",
  //   "12",
  //   "13",
  //   "14",
  //   "15",
  //   "16",
  //   "17",
  //   "18",
  //   "19",
  //   "20",
  //   "21",
  //   "22",
  //   "23",
  //   "24",
  //   "25",
] as const;
export type Day = typeof daysOfAoc[number];
