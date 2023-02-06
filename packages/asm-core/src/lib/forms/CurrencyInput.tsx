import { useState, useEffect } from 'react';
import { moneyRegEx } from '@assemble-inc/util';
import { Input } from './Input';

export type CurrencyInputProps = {
  id: string;
  name: string;
  label: string;
  required?: boolean;
  value?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
  onChange?: (e: any) => void;
  error?: string;
  errorClassName?: string;
}

export const CurrencyInput = ({
  id,
  required,
  value,
  style,
  label,
  name,
  disabled,
  placeholder,
  className = "asm-currency-input",
  onChange: propsOnChange,
  error: propsError,
  errorClassName
}: CurrencyInputProps) => {
  const [displayedValue, setDisplayedValue] = useState('');
  const [error, setError] = useState('');

  let classes = 'field ' + className;
  if (required) classes = classes + ' required';

  const onChange = (value: any) => {
    let isValid = moneyRegEx(value);
    const formValue = parseFloat(value);
    propsOnChange && propsOnChange(formValue);

    if (value === '') {
      setError(propsError || '');
      onChange(0);
      setDisplayedValue(value);
    } else if (!isValid) {
      setError(propsError || 'Enter a valid currency format');
    } else {
      setError(propsError || '');
      setDisplayedValue(value);
    }
  };

  useEffect(() => {
    // Manipulate the incoming value into a float with 2 decimal places
    if (value) {
      let newDisplayedValue: number | string = parseInt(value) / 100;
      newDisplayedValue =
        newDisplayedValue.toString().split('.')[1]?.length === 1
          ? newDisplayedValue.toFixed(2)
          : newDisplayedValue;
      setDisplayedValue(newDisplayedValue as string);
    }
  }, [value]);

  return (
    <Input
      style={style}
      className={classes}
      id={id}
      name={name}
      label={label}
      disabled={disabled}
      value={displayedValue}
      placeholder={placeholder}
      onChange={e => onChange(e.target.value)}
      icon='dollar'
      iconPosition='left'
      type='number'
      min={0.00}
      step={0.01}
      error={error}
      errorClassName={errorClassName}
    />
  );
};
