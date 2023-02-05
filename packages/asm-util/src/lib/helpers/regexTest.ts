export const regexTest = (regex: RegExp, test: string | number) => {
  return regex.test(test.toString());
}
