"use client";

import { useState } from 'react';
import { Input, InputProps } from './Input';
import { formatPhoneNumber } from '@assemble-inc/util';
import classNames from 'classnames';

export type PhoneNumberInputProps = InputProps & {
  validate?: (i: string) => boolean;
  onChange: (e: any) => void;
  required?: boolean;
  labelClassName?: string;
}

export const PhoneNumberInput = ({
  id,
  label,
  labelClassName,
  className,
  appendClassName,
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
      className={classNames(className, appendClassName)}
      error={error}
      errorClassName={errorClassName}
      onChange={onChange}
      value={value || ""}
      {...rest}
    />
  );
};
