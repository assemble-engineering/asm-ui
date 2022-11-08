import React, { ReactNode } from 'react';
import {Label} from '../Label';
import {Icon} from "../Icon"
import { Flex } from '../Flex';

export type InputProps = {
  id: string;
  name?: string;
  value: string | number;
  labelText?: string;
  label?: string;
  labelClassName?: string;
  labelHidden?: boolean;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  type?: 'text'| 'url'| 'time'| 'tel'| 'search'| 'range'| 'password'| 'number'| 'email'| 'month'| 'week'|'date'| 'datetime-local'| 'color';
  min?: number;
  max?: number;
  step?: number;
  icon?: string | ReactNode;
  loading?: boolean;
  iconPosition?: 'left' | 'right';
  onClick?: (event: React.MouseEvent) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: any;
  errorText?: string;
  errorClassName?: string;
  style?: React.CSSProperties;
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
      <Label className={labelClassName} htmlFor={id}>
        {labelText || label as string}
        {required && (
          <span
            style={{
              color: '#db2828',
              margin: '-0.2em 0em 0em 0.2em',
            }}
          >
            *
          </span>
        )}
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
