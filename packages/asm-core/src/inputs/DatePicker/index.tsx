import {useState} from 'react'
import {default as RDatePicker} from 'react-datepicker'
import {InputWrapper} from "../InputWrapper"

type DatePickerProps = {
  id: string;
  name: string;
  className?: string;
  label?: string;
  required?: boolean;
  initialValue: Date;
  onChange?: (date: Date) => void;
  showTimeSelect?: boolean;
  isClearable?: boolean;
  error?: string;
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
  error
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
      errorText={error}
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
