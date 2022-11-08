import { useState } from 'react';
import { Input, InputProps } from '../../Input';
import { formatPhoneNumber } from '@assemble-inc/util';

type PhoneNumberInputProps = InputProps & {
  validate?: (i: string) => boolean;
  onChange?: (e: any) => void;
  required: boolean;
  labelClassName?: string;
  error?: {
    errorClassName: string;
    errorText: string;
  };
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
      errorText={error?.errorText}
      errorClassName={error?.errorClassName}
      onChange={onChange}
      value={value || ""}
      {...rest}
    />
  );
};

export default PhoneNumberInput;
