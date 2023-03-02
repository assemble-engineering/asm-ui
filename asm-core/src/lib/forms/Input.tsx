import React, { ReactNode } from 'react';
import classNames from 'classnames';
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
  iconLeft?: string | ReactNode;
  iconRight?: string | ReactNode;
  iconColor?: string;
  loading?: boolean;
  onKeyDown?: any;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent) => void;
  onIconClick?: (event: React.MouseEvent) => void;
  disabled?: boolean;
  required?: boolean;
  className?: string;
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
  onIconClick,
  loading,
  value,
  label,
  labelClassName,
  error,
  errorClassName,
  style,
  iconLeft,
  iconRight,
  iconColor = '#333',
  min,
  max,
  step,
  ...rest
}: InputProps): JSX.Element => {
  return (
    <InputWrapper
      labelHidden={labelHidden}
      labelClassName={labelClassName}
      htmlFor={id}
      required={required}
      label={label}
      error={error}
      className={classNames(className, iconLeft ? 'asm-input-icon-left' : '', iconRight ? 'asm-input-icon-right' : '', error ? 'asm-input-error' : '')}
      errorClassName={errorClassName}
      style={style}
    >
      {iconLeft &&
        <span className="input-icon-left">{
          typeof iconLeft === "string" ? <Icon onClick={onIconClick} color={iconColor} size='small' name={iconLeft} /> : <Icon onClick={onIconClick} color={iconColor} size='small'>{iconLeft}</Icon>
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
      {iconRight && <span className="input-icon-right">{
        typeof iconRight === "string" ? <Icon onClick={onIconClick} color={iconColor} size='small' name={iconRight} /> : <Icon onClick={onIconClick} color={iconColor} size='small'>{iconRight}</Icon>
      }</span>
      }
    </InputWrapper>
  )
};
