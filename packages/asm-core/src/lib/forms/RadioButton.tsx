import { ErrorType } from "./Input";
import { InputWrapper } from "./InputWrapper";

export type RadioButtonProps = ErrorType & {
  id: string;
  value: string;
  checked: boolean;
  onChange: (e: any) => void;
  onBlur?: (e: any) => void;
  onFocus?: (e: any) => void;
  required?: boolean;
  label: string | React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const RadioButton = ({
  id,
  value,
  checked,
  onChange,
  onBlur,
  onFocus,
  required,
  label,
  className = 'asm-radio-button',
  error,
  errorClassName,
  style
}: RadioButtonProps) => {
  return (
    <InputWrapper
      htmlFor={id}
      label={label}
      className={className}
      error={error}
      errorClassName={errorClassName}
      style={style}
    >
      <input
        id={id}
        type='radio'
        value={value}
        className='radio-button'
        checked={checked}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        required={required ? true : false}
      />
    </InputWrapper>
  );
};
