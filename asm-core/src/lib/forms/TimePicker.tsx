import {useState} from 'react'
import DatePicker from 'react-datepicker'
import { InputWrapper } from "./InputWrapper"
import { ErrorType } from "./Input"
import "./styles/react-datepicker.css";
import classNames from 'classnames';

export type TimePickerProps = ErrorType & {
  id: string;
  label?: string;
  inputCaption?: string;
  required?: boolean;
  initialDate?: Date;
  timeInterval?: number;
  onChange?: (date: Date) => void;
  className?: string;
  appendClassName?: string;
  isClearable?: boolean;
  style?: React.CSSProperties;
}

export const TimePicker = ({
  id,
  label,
  required,
  initialDate = new Date(),
  timeInterval = 15,
  inputCaption = "Time",
  className='asm-datepicker',
  appendClassName,
  onChange,
  isClearable,
  error,
  errorClassName,
  style
}: TimePickerProps) => {
    const [startDate, setStartDate] = useState(initialDate);

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
        style={style}
        className={classNames(className, appendClassName)}
      >
        <DatePicker
          id={id}
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
