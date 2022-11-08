import { useState } from 'react';
import { Input } from '../../Input';

type FormattedNumberProps = {
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
  errors?: {
    name: string;
  }
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
  errors,
  onChange,
  ...inputProps
}: FormattedNumberProps) => {
  const [displayValue, setDisplayValue] = useState(initialValue);

  const handleOnChange = (e: any) => {
    const value = e.target.value
    const numberValue = parseFloat(value.replace(/,/g, ''))
    onChange && onChange(numberValue);
    setFieldValue && setFieldValue(name, numberValue);
    if(value?.split('').pop()[0] === '.') {
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

  const error = errors && errors?.[name];

  return (
    <div className={className}>
      {label && (
        <label style={{ display: 'block' }} htmlFor={name}>
          {label}
          {required && <span style={{ color: '#9f3a38' }}> *</span>}
        </label>
      )}
      <Input
        style={{ width: '100%' }}
        id={name}
        name={name}
        value={displayValue}
        onChange={handleOnChange}
        required={required}
        {...inputProps}
      />
      {error && (
        <span className='asm-formatted-number-error-message'>{errors?.[name]}</span>
      )}
    </div>
  );
};

FormattedNumberInput.defaultProps = {
  initialValue: '',
};

export default FormattedNumberInput;
