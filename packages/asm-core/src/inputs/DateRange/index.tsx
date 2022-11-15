import {useState} from 'react'
import DatePicker from 'react-datepicker'
import {InputWrapper} from '../InputWrapper'

type DateRangeProps = {
  initialDateStart: Date;
  dateStartId: string;
  dateStartName: string;
  dateStartLabel: string;
  dateStartError?: string;
  initialDateEnd: Date;
  dateEndId: string;
  dateEndName: string;
  dateEndLabel: string;
  dateEndError?: string;
  required?: boolean;
  onChange?: ([initial, end]: Date[]) => void;
  isClearable?: boolean;
}

export const DateRange = ({
  initialDateStart,
  dateStartId,
  dateStartName,
  dateStartLabel,
  dateStartError,
  initialDateEnd,
  dateEndId,
  dateEndName,
  dateEndLabel,
  dateEndError,
  required,
  onChange,
  isClearable
}: DateRangeProps) => {
  const [range, setRange] = useState([initialDateStart, initialDateEnd])

  const handleStartChange = (date: Date) => {
    setRange(prev => [date, prev[1]]);
    onChange && onChange(range);
  }

  const handleEndChange = (date: Date) => {
    setRange(prev => [prev[0], date]);
    onChange && onChange(range);
  }

  const startDate = range[0];
  const endDate = range[1];

  return (
    <>
      <InputWrapper
        htmlFor={dateStartId || dateStartName}
        label={dateStartLabel}
        required={required}
        errorText={dateStartError}
      >
        <DatePicker
          id={dateStartId}
          name={dateStartName}
          selected={startDate}
          onChange={handleStartChange}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          isClearable={isClearable}
        />
      </InputWrapper>
      <InputWrapper
        htmlFor={dateEndId || dateEndName}
        label={dateEndLabel}
        required={required}
        errorText={dateEndError}
      >
        <DatePicker
          id={dateEndId}
          name={dateEndName}
          selected={endDate}
          onChange={handleEndChange}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          isClearable={isClearable}
        />
      </InputWrapper>
    </>
  )

}

export default DateRange
