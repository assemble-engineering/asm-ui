import React, { ReactNode } from 'react';
import { Icon } from "../Icon"
import { InputWrapper } from "./InputWrapper"

export type ErrorType = {
  error?: string;
  errorClassName?: string;
}

export type InputProps = ErrorType & {
  id: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  labelClassName?: string;
  labelHidden?: boolean;
  placeholder?: string;
  type?: 'text' | 'url' | 'time' | 'tel' | 'search' | 'range' | 'password' | 'number' | 'email' | 'month' | 'week' | 'date' | 'datetime-local' | 'color';
  min?: number;
  max?: number;
  step?: number;
  leftIcon?: string | ReactNode;
  rightIcon?: string | ReactNode;
  iconColor?: string;
  loading?: boolean;
  onKeyDown?: any;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent) => void;
  clearValue?: (event: React.MouseEvent) => void;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  regexValidation?: any;
  maxChar?: string | number;
};

export const Input = ({
  type = 'text',
  className = 'asm-input',
  disabled = false,
  required = false,
  labelHidden = false,
  placeholder,
  id,
  onChange,
  onClick,
  clearValue,
  loading,
  value,
  label,
  labelClassName,
  error,
  errorClassName,
  style,
  leftIcon,
  rightIcon,
  iconColor = '#333',
  min,
  max,
  step,
  regexValidation,
  maxChar,
  ...rest
}: InputProps): JSX.Element => {
  let modifiedClassName = className;
  let modifiedRightIcon = rightIcon;

  if (maxChar && value) {
    let displayedValue = (Number(maxChar) - value.toString().length);
    rightIcon = <div>{displayedValue}</div>;
    modifiedRightIcon = rightIcon;
    if (value.toString().length > maxChar) {
      error = "Shorten text to fit within the character limit."
    }

  }

  if (leftIcon) {
    modifiedClassName = "asm-input-with-left-icon"
  }

  if (rightIcon) {
    modifiedClassName = "asm-input-with-right-icon"
  }

  if (rightIcon && leftIcon) {
    modifiedClassName = "asm-input-with-right-icon asm-input-with-left-icon"
  }

  if (regexValidation) {
    if (value.toString().match(regexValidation)) {
      modifiedRightIcon = <div>&#x2705;</div>
    } else if (value !== "" && !value.toString().match(regexValidation)) {
      modifiedRightIcon = <div>&#10005;</div>
    } else {
      modifiedRightIcon = <div></div>
    }
  }



  return (
    <InputWrapper
      labelHidden={labelHidden}
      labelClassName={value ? "asm-label-sticky" : placeholder ? "asm-label-sticky" : labelClassName}
      htmlFor={id}
      required={required}
      label={label}
      error={error}
      className={modifiedClassName}
      errorClassName={errorClassName}
      style={style}
    >
      {leftIcon &&
        <span className="input-icon-left">{
          typeof leftIcon === "string" ? <Icon color={iconColor} size='small' name={leftIcon} /> : <Icon color={iconColor} size='small'>{leftIcon}</Icon>
        }</span>
      }
      <input
        id={id}
        type={type}
        aria-labelledby={id}
        aria-label={label}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        onChange={onChange}
        onClick={onClick}
        value={value}
        min={min}
        max={max}
        step={step}
        {...rest}
      />
      {modifiedRightIcon &&
        <span className="input-icon-right">{
          typeof modifiedRightIcon === "string" ? <Icon clearValue={clearValue} color={iconColor} size='small' name={modifiedRightIcon} /> : <Icon clearValue={clearValue} color={iconColor} size='small'>{modifiedRightIcon}</Icon>
        }</span>
      }
    </InputWrapper>
  )
};
