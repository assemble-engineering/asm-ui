import { Label } from '../Label'

type InputWrapperProps = {
  className?: string;
  labelHidden?: boolean;
  labelClassName?: string;
  htmlFor: string;
  required?: boolean;
  labelText?: string;
  label?: string;
  errorText?: string;
  errorClassName?: string;
  children: React.ReactNode;
}

export const InputWrapper = ({
  className,
  labelHidden,
  labelClassName,
  htmlFor,
  required,
  labelText,
  label,
  errorText,
  errorClassName = 'asm-error-message',
  children
}: InputWrapperProps) => {

  return (
    <div className={className}>
     {!labelHidden &&
        <Label className={labelClassName} htmlFor={htmlFor} required={required}>
          {labelText || label as string}
        </Label>
      }
      {children}
      {errorText && <span className={errorClassName}>{errorText}</span>}
    </div>
  )
}
