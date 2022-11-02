import { ChangeEvent, SetStateAction } from 'react';
import { Label } from '..';

export type CheckboxProps = {
  id: string;
  tabIndex?: number;
  value: string;
  labelText: string;
  // listener for onChange of checkbox
  onChange?: (
    event: ChangeEvent<HTMLInputElement> | SetStateAction<boolean>
  ) => void;
  disabled?: boolean;
  checked: boolean;
  inputClassName?: string;
  labelClassName?: string;
  className?: string;
};

export const Checkbox = ({
  disabled=false,
  tabIndex=0,
  checked,
  id,
  labelText,
  value,
  onChange,
  className='asm-checkbox',
  labelClassName='asm-checkbox-label',
}: CheckboxProps): JSX.Element => {
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.checked);
    }
    return null;
  };

  return (
    <>
      <input
        id={id}
        className={className}
        checked={checked}
        disabled={disabled}
        tabIndex={tabIndex}
        type='checkbox'
        value={value}
        onChange={handleOnChange}
      />
      <Label
        className={labelClassName}
        htmlFor={id}
      >
        {labelText}
      </Label>
    </>
  );
};
