const split = (sep: string, str: string) => str.split(sep);

export default split;

export const splitByEmptyLine = (str: string) => split("\n\n", str);
export const splitByLine = (str: string) => split("\n", str);
export const splitByComma = (str: string) => split(",", str);
export const splitBySpace = (str: string) => split(" ", str);
