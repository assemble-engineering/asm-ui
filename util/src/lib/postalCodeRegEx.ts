import {regexTest} from "./helpers/regexTest";

export const postalCodeRegEx = (postalCode: string | number): boolean => {
  return regexTest(/^\d{5}(?:[-\s]\d{4})?$/, postalCode);
}
