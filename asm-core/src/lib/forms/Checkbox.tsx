import { ChangeEvent, SetStateAction } from 'react';
import { InputWrapper } from './InputWrapper';
import { ErrorType } from './Input';
import classNames from 'classnames';

export type CheckboxProps = ErrorType & {
  id: string;
  tabIndex?: number;
  value?: string;
  label: string;
  labelClassName?: string;
  onChange?: (
    event: ChangeEvent<HTMLInputElement> | SetStateAction<boolean>
  ) => void;
  disabled?: boolean;
  checked?: boolean;
  inputClassName?: string;
  className?: string;
  appendClassName?: string;
  style?: React.CSSProperties;
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
  appendClassName,
  labelClassName='asm-label',
  error,
  errorClassName,
  style
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
      className={classNames(className, appendClassName)}
      style={style}
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
