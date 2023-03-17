import classNames from 'classnames';
import {useState} from 'react'
import DatePicker from 'react-datepicker'
import { ErrorType } from './Input'
import { InputWrapper } from './InputWrapper'
import "./styles/react-datepicker.css";

export type DateRangeSingleProps = ErrorType & {
  id: string;
  label: string;
  initialStartDate?: Date;
  initialEndDate?: Date;
  required?: boolean;
  className?: string;
  appendClassName?: string;
  onChange?: (dates: Date[]) => void
  inline?: boolean;
  isClearable?: boolean;
  style?: React.CSSProperties;
}

export const DateRangeSingleCalendar = ({
  id,
  label,
  initialStartDate = new Date(),
  initialEndDate = new Date(),
  required,
  onChange,
  inline,
  isClearable,
  className='asm-datepicker',
  appendClassName,
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
      className={classNames(className, appendClassName)}
    >
      <DatePicker
        id={id}
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
