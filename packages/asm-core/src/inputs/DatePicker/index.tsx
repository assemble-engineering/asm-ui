import {useState} from 'react'
import {default as RDatePicker} from 'react-datepicker'
import { InputWrapper } from "../../Input/InputWrapper"
import { ErrorType } from "../../Input"
import "../react-datepicker-styles.css";

type DatePickerProps = ErrorType & {
  id: string;
  name: string;
  className?: string;
  label?: string;
  required?: boolean;
  initialValue: Date;
  onChange?: (date: Date) => void;
  showTimeSelect?: boolean;
  isClearable?: boolean;
}

export const DatePicker = ({
  id,
  name,
  className,
  label,
  required,
  initialValue = new Date(),
  onChange,
  showTimeSelect,
  isClearable,
  error,
  errorClassName
}: DatePickerProps) => {
  const [date, setStartDate] = useState(initialValue);

  const handleChange = (newDate: Date) => {
    onChange && onChange(newDate);
    setStartDate(newDate);
  }

  return (
    <InputWrapper
      htmlFor={id}
      label={label}
      required={required}
      error={error}
      errorClassName={errorClassName}
      className={className}
    >
      <RDatePicker
        id={id || name}
        name={name}
        selected={date}
        onChange={handleChange}
        showTimeSelect={showTimeSelect}
        dateFormat={showTimeSelect && "MMMM d, yyyy h:mm aa"}
        isClearable={isClearable}
      />
    </InputWrapper>
  );
}

export default DatePicker
