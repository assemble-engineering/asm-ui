import { useState } from 'react';
import { Input, InputProps } from './Input';
import { formatPhoneNumber } from '../util';

export type PhoneNumberInputProps = InputProps & {
  validate?: (i: string) => boolean;
  onChange?: (e: any) => void;
  required: boolean;
  labelClassName?: string;
}

export const PhoneNumberInput = ({
  id,
  label,
  labelClassName,
  className,
  validate,
  onChange: propsOnChange,
  required,
  error,
  errorClassName,
  value: initialValue = "",
  ...rest
}: PhoneNumberInputProps) => {
  const [value, setValue] = useState(formatPhoneNumber(initialValue));

  const onChange = (e: any) => {
    propsOnChange && propsOnChange(e);
    const val = e.target.value;
    const formattedVal = formatPhoneNumber(val);
    setValue(formattedVal);
  };

  return (
    <Input
      id={id}
      label={label}
      labelClassName={labelClassName}
      className={className}
      error={error}
      errorClassName={errorClassName}
      onChange={onChange}
      value={value || ""}
      {...rest}
    />
  );
};
