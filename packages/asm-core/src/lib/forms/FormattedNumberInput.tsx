import { useState } from 'react';
import { Input, ErrorType } from './Input';

type FormattedNumberProps = ErrorType & {
  initialValue: string;
  name: string;
  max?: number;
  maximumFractionDigits?: number;
  allowEmpty: boolean;
  setFieldValue: (name: string, value: number) => void;
  onChange?: (value: number) => void;
  required?: boolean;
  label: string;
  className?: string;
}

export const FormattedNumberInput = ({
  initialValue = "0",
  name,
  max,
  maximumFractionDigits,
  allowEmpty = true,
  setFieldValue,
  required,
  label,
  className = "asm-formatted-number",
  error,
  errorClassName,
  onChange,
  ...inputProps
}: FormattedNumberProps) => {
  const [displayValue, setDisplayValue] = useState(initialValue);

  const handleOnChange = (e: any) => {
    const value = e.target.value
    const numberValue = parseFloat(value.replace(/,/g, ''))
    onChange && onChange(numberValue);
    setFieldValue && setFieldValue(name, numberValue);
    if(value?.split('').pop()?.[0] === '.') {
      setDisplayValue(value);
    }
    else if(isNaN(numberValue)){
      setDisplayValue("")
    }
    else{
      const display = max && max < numberValue ? max : numberValue
      setDisplayValue(display.toLocaleString(navigator.language, {maximumFractionDigits: maximumFractionDigits || 4}));
    }
  };

  return (
      <Input
        className={className}
        style={{ width: '100%' }}
        id={name}
        name={name}
        value={displayValue}
        onChange={handleOnChange}
        required={required}
        label={label}
        errorClassName={errorClassName}
        error={error}
        {...inputProps}
      />
  );
};

FormattedNumberInput.defaultProps = {
  initialValue: '',
};
