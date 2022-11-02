type Options = {
  locale: string;
  currency: string;
}
const toMoneyString = (amount: number, options?: Options): string => {
  const { locale, currency } = options || {}
  const formatter = new Intl.NumberFormat(locale || 'en-US', {
    style: 'currency',
    currency: currency || 'USD',
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  return formatter.format(amount)
}

export default toMoneyString