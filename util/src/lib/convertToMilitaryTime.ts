// converts 12 hours to 24 hours (1:00 PM -> 13:00)

export const convertToMilitaryTime = (date: Date): string => {
  return date?.toLocaleString('en-US', {hour12: false})
}
