import React, { ReactNode } from 'react';
import {Label} from '../Label';
import {Icon} from "../Icon"

export type InputProps = {
  id: string;
  name?: string;
  value: string | number;
  labelText?: string;
  label?: string;
  labelClassName?: string;
  labelHidden?: boolean;
  placeholder?: string;
  type?: 'text'| 'url'| 'time'| 'tel'| 'search'| 'range'| 'password'| 'number'| 'email'| 'month'| 'week'|'date'| 'datetime-local'| 'color';
  min?: number;
  max?: number;
  step?: number;
  icon?: string | ReactNode;
  loading?: boolean;
  iconPosition?: 'left' | 'right';
  onKeyDown?: any;
  style?: React.CSSProperties;
  errorText?: string;
  errorClassName?: string;
  onClick?: (event: React.MouseEvent) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  className?: string;
};

export const Input = ({
  type='text',
  className='asm-input',
  errorClassName='asm-input-error',
  disabled = false,
  required = false,
  labelHidden= false,
  placeholder,
  id,
  name,
  onChange,
  onClick,
  loading,
  value,
  labelText,
  label,
  labelClassName = 'asm-input-label',
  errorText,
  style,
  icon,
  iconPosition,
  min,
  max,
  step,
  ...rest
}: InputProps): JSX.Element => (
  <>
    {!labelHidden &&
      <Label className={labelClassName} htmlFor={id} required={required}>
        {labelText || label as string}
      </Label>
    }
      {icon && iconPosition === "left" &&
        <span className="input-icon-left">{
          typeof icon === "string" ? <Icon size='small' name={icon} /> : icon
        }</span>
      }
        <input
          id={id}
          name={name}
          type={type}
          aria-labelledby={id}
          aria-label={labelText || label}
          className={className}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          onChange={onChange}
          onClick={onClick}
          value={value}
          style={style}
          min={min}
          max={max}
          step={step}
          {...rest} />
      {icon && iconPosition === "right" &&
        <span className="input-icon-right">{
          typeof icon === "string" ? <Icon size='small' name={icon} /> : icon
        }</span>
      }
    {errorText && <span className={errorClassName}>{errorText}</span>}
  </>
);
