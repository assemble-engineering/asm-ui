import regexTest from "./helpers/regexTest";

const phoneNumberRegEx = (phoneNumber: string | number): boolean => {
  return regexTest(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, phoneNumber);
}

export default phoneNumberRegEx;
