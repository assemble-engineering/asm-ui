import { Label } from '../Label'
import { ErrorType } from "."

type InputWrapperProps = ErrorType & {
  className?: string;
  labelHidden?: boolean;
  labelClassName?: string;
  htmlFor: string;
  required?: boolean;
  label?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const InputWrapper = ({
  className,
  labelHidden,
  labelClassName = 'asm-input-label',
  htmlFor,
  required,
  label,
  error,
  errorClassName = 'asm-input-error',
  children,
  style,
}: InputWrapperProps) => {

  return (
    <div className={className} style={style}>
     {!labelHidden &&
        <Label className={labelClassName} htmlFor={htmlFor} required={required}>
          {label}
        </Label>
      }
      {children}
      {error && <span className={errorClassName}>{error}</span>}
    </div>
  )
}
