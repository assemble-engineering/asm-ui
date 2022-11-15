import {useState} from 'react'
import DatePicker from 'react-datepicker'
import { InputWrapper } from "../InputWrapper"

type TimePickerProps = {
  id: string;
  name: string;
  label?: string;
  inputCaption?: string;
  required?: boolean;
  initialValue: Date;
  timeInterval?: number;
  onChange?: (date: Date) => void;
  isClearable?: boolean;
  error?: string;
  errorClassName?: string;
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
        errorText={error}
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
