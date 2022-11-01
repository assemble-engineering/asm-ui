import regexTest from "./helpers/regexTest";

const postalCodeRegEx = (postalCode: string | number): boolean => {
  return regexTest(/^\d{5}(?:[-\s]\d{4})?$/, postalCode);
}

export default postalCodeRegEx
