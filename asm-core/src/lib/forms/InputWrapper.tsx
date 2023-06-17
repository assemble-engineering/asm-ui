"use client";

import classNames from 'classnames';
import { Label } from './Label'

type ErrorType = {
  error?: string;
  errorClassName?: string;
}

export type InputWrapperProps = ErrorType & {
  className?: string;
  appendClassName?: string;
  labelHidden?: boolean;
  labelClassName?: string;
  htmlFor: string;
  required?: boolean;
  label: string | React.ReactNode;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const InputWrapper = ({
  className = 'asm-input',
  appendClassName,
  labelHidden,
  labelClassName = 'asm-label',
  htmlFor,
  required,
  label,
  error,
  errorClassName = 'asm-input-error',
  children,
  style,
}: InputWrapperProps) => (
  <div className={classNames(className, appendClassName)} style={style}>
    <Label style={labelHidden ? { visibility: "hidden" } : undefined} className={labelClassName} htmlFor={htmlFor} required={required}>
      {label}
    </Label>
    {children}
    {error && <span className={errorClassName}>{error}</span>}
  </div>
)
