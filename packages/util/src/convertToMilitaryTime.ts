// converts 12 hours to 24 hours (1:00 PM -> 13:00)
type Options = {
  separator: string;
  noColon: boolean;
}
const convertMilitaryTime = (time12h: string, options?: Options): string => {
  const { separator, noColon } = options || {};
  const [time, modifier] = time12h.split(separator || ' ');

  let [hours, minutes] = time.split(':');

  if (hours === '12') {
    hours = '00';
  }

  if (modifier === 'PM') {
    hours = (parseInt(hours, 10) + 12).toString();
  }

  return `${hours}${noColon ? '' : ':'}${minutes}`;
}


export default convertMilitaryTime;
