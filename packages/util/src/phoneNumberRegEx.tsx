const phoneNumberRegEx = (phoneNumber: string | number) => {
  const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return regex.test(phoneNumber.toString())
}

export default phoneNumberRegEx;
