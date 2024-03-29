"use client";

import {useState} from 'react'
import {default as RDatePicker} from 'react-datepicker'
import { InputWrapper } from "./InputWrapper"
import { ErrorType } from "./Input"
import classNames from 'classnames'

export type DatePickerProps = ErrorType & {
  id: string;
  className?: string;
  appendClassName?: string;
  label?: string;
  required?: boolean;
  initialDate?: Date;
  onChange?: (date: Date) => void;
  showTimeSelect?: boolean;
  isClearable?: boolean;
  style?: React.CSSProperties;
}

export const DatePicker = ({
  id,
  className='asm-datepicker',
  appendClassName,
  label,
  required,
  initialDate = new Date(),
  onChange,
  showTimeSelect,
  isClearable,
  error,
  errorClassName,
  style
}: DatePickerProps) => {
  const [date, setStartDate] = useState(initialDate);

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
      className={classNames(className, appendClassName)}
      style={style}
    >
      <RDatePicker
        id={id}
        selected={date}
        onChange={handleChange}
        showTimeSelect={showTimeSelect}
        dateFormat={showTimeSelect && "MMMM d, yyyy h:mm aa"}
        isClearable={isClearable}
      />
    </InputWrapper>
  );
}
