import {useState} from 'react'
import DatePicker from 'react-datepicker'
import { ErrorType } from './Input'
import { InputWrapper } from './InputWrapper'
import "./react-datepicker-styles.css";

export type DateRangeSingleProps = ErrorType & {
  id: string;
  name: string;
  label: string;
  initialStartDate: Date;
  initialEndDate?: Date;
  required?: boolean;
  className?: string;
  onChange?: (dates: Date[]) => void
  inline?: boolean;
  isClearable?: boolean;
  style?: React.CSSProperties;
}

export const DateRangeSingleCalendar = ({
  id,
  name,
  label,
  initialStartDate = new Date(),
  initialEndDate,
  required,
  onChange,
  inline,
  isClearable,
  className='asm-datepicker',
  error,
  errorClassName,
  style
}: DateRangeSingleProps) => {
  const [startDate, setStartDate] = useState(initialStartDate);
  const [endDate, setEndDate] = useState(initialEndDate || null);
  const handleChange = (dates: Date[]) => {
    const [start, end] = dates;
    onChange && onChange(dates)
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <InputWrapper
      htmlFor={id}
      label={label}
      required={required}
      error={error}
      errorClassName={errorClassName}
      style={style}
      className={className}
    >
      <DatePicker
        id={id}
        name={name}
        selected={startDate}
        onChange={handleChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline={inline}
        isClearable={isClearable}
      />
    </InputWrapper>
  );
};
