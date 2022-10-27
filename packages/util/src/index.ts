import phoneNumberRegEx from "./phoneNumberRegEx";
import postalCodeRegEx from "./postalCodeRegEx";
import toMoneyString from "./toMoneyString";
import convertToMilitaryTime from "./convertToMilitaryTime";
import formatPhoneNumber from "./formatPhoneNumber";
import {toCamelCase, toKebabCase, toPascalCase, toPathCase, toSentenceCase, toSnakeCase} from './case';

const casing = {
  toCamelCase, toKebabCase, toPascalCase, toPathCase, toSentenceCase, toSnakeCase
}

export {
  phoneNumberRegEx,
  postalCodeRegEx,
  toMoneyString,
  convertToMilitaryTime,
  formatPhoneNumber,
  casing
}
