import { regexTest } from "./helpers/regexTest";

export const phoneNumberRegEx = (phoneNumber: string | number): boolean => {
  return regexTest(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, phoneNumber);
}
