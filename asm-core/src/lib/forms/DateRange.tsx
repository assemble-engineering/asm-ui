import {useState} from 'react'
import DatePicker from 'react-datepicker'
import {InputWrapper} from './InputWrapper'
import "./styles/react-datepicker.css";

export type DateRangeProps = {
  initialStartDate?: Date;
  dateStartId: string;
  dateStartLabel: string;
  dateStartError?: string;
  initialEndDate?: Date;
  dateEndId: string;
  dateEndLabel: string;
  dateEndError?: string;
  required?: boolean;
  className?: string;
  onChange?: ([initial, end]: Date[]) => void;
  isClearable?: boolean;
  style?: React.CSSProperties;
}

export const DateRange = ({
  initialStartDate = new Date(),
  dateStartId,
  dateStartLabel,
  dateStartError,
  initialEndDate = new Date(),
  dateEndId,
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
        htmlFor={dateStartId}
        label={dateStartLabel}
        required={required}
        error={dateStartError}
        style={style}
        className={className}
      >
        <DatePicker
          id={dateStartId}
          selected={startDate}
          onChange={handleStartChange}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          isClearable={isClearable}
        />
      </InputWrapper>
      <InputWrapper
        htmlFor={dateEndId}
        label={dateEndLabel}
        required={required}
        error={dateEndError}
        className={className}
      >
        <DatePicker
          id={dateEndId}
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
