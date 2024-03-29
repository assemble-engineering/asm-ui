import { regexTest } from "./helpers/regexTest";

export const moneyRegEx = (moneyString: string | number): boolean => {
  return regexTest(/^[0-9]+(\.[0-9]{1,2})?$/, moneyString);
}
