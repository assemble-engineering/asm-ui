import { ChangeEvent, SetStateAction } from 'react';
import { InputWrapper } from './InputWrapper';
import { ErrorType } from './Input';

export type CheckboxProps = ErrorType & {
  id: string;
  tabIndex?: number;
  value: string;
  label: string;
  labelClassName?: string;
  onChange?: (
    event: ChangeEvent<HTMLInputElement> | SetStateAction<boolean>
  ) => void;
  disabled?: boolean;
  checked: boolean;
  inputClassName?: string;
  className?: string;
};

export const Checkbox = ({
  disabled=false,
  tabIndex=0,
  checked,
  id,
  label,
  value,
  onChange,
  className='asm-checkbox',
  labelClassName='asm-checkbox-label',
  error,
  errorClassName
}: CheckboxProps): JSX.Element => {
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.checked);
    }
    return null;
  };

  return (
    <InputWrapper
      label={label}
      labelClassName={labelClassName}
      htmlFor={id}
      error={error}
      errorClassName={errorClassName}
      className={className}
    >
      <input
        id={id}
        checked={checked}
        disabled={disabled}
        tabIndex={tabIndex}
        type='checkbox'
        value={value}
        onChange={handleOnChange}
      />
    </InputWrapper>
  );
};
