import {useState} from 'react'
import DatePicker from 'react-datepicker'
import {InputWrapper} from './InputWrapper'
import "../forms/react-datepicker-styles.css";

export type DateRangeProps = {
  initialStartDate: Date;
  dateStartId: string;
  dateStartName: string;
  dateStartLabel: string;
  dateStartError?: string;
  initialEndDate: Date;
  dateEndId: string;
  dateEndName: string;
  dateEndLabel: string;
  dateEndError?: string;
  required?: boolean;
  className?: string;
  onChange?: ([initial, end]: Date[]) => void;
  isClearable?: boolean;
  style?: React.CSSProperties;
}

export const DateRange = ({
  initialStartDate,
  dateStartId,
  dateStartName,
  dateStartLabel,
  dateStartError,
  initialEndDate,
  dateEndId,
  dateEndName,
  dateEndLabel,
  dateEndError,
  required,
  onChange,
  isClearable,
  className='asm-datepicker',
  style
}: DateRangeProps) => {
  const [range, setRange] = useState([initialStartDate, initialEndDate])

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
        error={dateStartError}
        style={style}
        className={className}
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
        error={dateEndError}
        className={className}
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
