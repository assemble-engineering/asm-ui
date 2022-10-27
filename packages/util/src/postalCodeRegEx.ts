import regexTest from "./helpers/regexTest";

const postalCodeRegEx = (postalCode: string | number): boolean => {
  return regexTest(/(^\d{ 5}$) | (^\d{ 9 }$)| (^\d{ 5 } -\d{ 4 }$)/, postalCode);
}

export default postalCodeRegEx
