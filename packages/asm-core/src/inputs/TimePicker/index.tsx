import {useState} from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { InputWrapper } from "../../Input/InputWrapper"
import { ErrorType } from "../../Input"

type TimePickerProps = ErrorType & {
  id: string;
  name: string;
  label?: string;
  inputCaption?: string;
  required?: boolean;
  initialValue: Date;
  timeInterval?: number;
  onChange?: (date: Date) => void;
  isClearable?: boolean;
}

export const TimePicker = ({
  id,
  name,
  label,
  required,
  initialValue,
  timeInterval = 15,
  inputCaption = "Time",
  onChange,
  isClearable,
  error,
  errorClassName
}: TimePickerProps) => {
    const [startDate, setStartDate] = useState(initialValue);

    const handleChange = (date: Date) => {
      onChange && onChange(date);
      setStartDate(date);
    }

    return (
      <InputWrapper
        htmlFor={id}
        label={label}
        required={required}
        error={error}
        errorClassName={errorClassName}
      >
        <DatePicker
          id={id}
          name={name}
          selected={startDate}
          onChange={handleChange}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={timeInterval}
          timeCaption={inputCaption}
          dateFormat="h:mm aa"
          isClearable={isClearable}
        />
      </InputWrapper>
    )
};

export default TimePicker;
