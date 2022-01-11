import React from 'react';
import {Label} from '../Label';

type InputTypes = {
  id: string;
  value: string | number;
  labelText: string;
  labelHidden?: boolean;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  type?: 'text'| 'url'| 'time'| 'tel'| 'search'| 'range'| 'password'| 'number'| 'email'| 'month'| 'week'|'date'| 'datetime-local'| 'color',
  onClick?: (event: React.MouseEvent) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errorText?: string;
  errorClassName?: string;
};

export const Input = ({
  type='text',
  className='asm-input',
  errorClassName='asm-input-error',
  disabled = false,
  labelHidden= false,
  placeholder,
  id,
  onChange,
  onClick,
  value,
  labelText,
  errorText,
}: InputTypes): JSX.Element => (
  <>
    {!labelHidden && <Label htmlFor={id}>{labelText}</Label>}
    <input
      id={id}
      type={type}
      aria-labelledby={id}
      aria-label={labelText}
      className={className}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
      onClick={onClick}
      value={value}
    />
    {errorText && <span className={errorClassName}>{errorText}</span>}
  </>
);
