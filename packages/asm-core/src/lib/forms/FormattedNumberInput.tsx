import { useState } from 'react';
import { Input, ErrorType } from './Input';

export type FormattedNumberProps = ErrorType & {
  initialValue?: string;
  id: string;
  max?: number;
  maximumFractionDigits?: number;
  allowEmpty?: boolean;
  onChange?: (value: number) => void;
  required?: boolean;
  label: string;
  className?: string;
  style?: React.CSSProperties;
}

export const FormattedNumberInput = ({
  initialValue = "0",
  id,
  max,
  maximumFractionDigits,
  allowEmpty = true,
  required,
  label,
  className,
  error,
  errorClassName,
  onChange,
  style,
  ...inputProps
}: FormattedNumberProps) => {
  const [displayValue, setDisplayValue] = useState(initialValue);

  const handleOnChange = (e: any) => {
    const value = e.target.value
    const numberValue = parseFloat(value.replace(/,/g, ''))
    onChange && onChange(e);
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
      id={id}
      value={displayValue}
      onChange={handleOnChange}
      required={required}
      label={label}
      errorClassName={errorClassName}
      error={error}
      style={style}
      {...inputProps}
    />
  );
};
