import { useState, useEffect } from 'react';
import { Input } from '../../Input';

const moneyRegEx = new RegExp(/^[0-9]+(\.[0-9]{1,2})?$/);

type MoneyInputProps = {
  required?: boolean;
  value?: string;
  style?: React.CSSProperties;
  labelText?: string;
  name: string;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
  onChange?: (e: any) => void;
}

export const MoneyInput = ({
  required,
  value,
  style,
  labelText,
  name,
  disabled,
  placeholder,
  className = "asm-money-input",
  onChange: propsOnChange
}: MoneyInputProps) => {
  const [displayedValue, setDisplayedValue] = useState('');
  const [error, setError] = useState('');

  let classes = 'field ' + className;
  if (required) classes = classes + ' required';

  const onChange = (value: any) => {
    let isValid = moneyRegEx.test(value);

    if (value === '') {
      setError('');
      onChange(0);
      setDisplayedValue(value);
    } else if (!isValid) {
      setError('Enter a valid money format');
    } else {
      setError('');
      setDisplayedValue(value);

      // Manipulate the outgoing value back into an integer
      const formValue = parseFloat(value);
      propsOnChange && propsOnChange(formValue);
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
    <div style={style} className={classes}>
      {labelText && (
        <label
          style={{ display: 'block', marginBottom: '0.285rem' }}
          htmlFor={name}
        >
          {labelText}
        </label>
      )}
      <Input
        id={name}
        name={name}
        disabled={disabled}
        value={displayedValue}
        placeholder={placeholder}
        onChange={e => onChange(e.target.value)}
        icon='dollar'
        iconPosition='left'
        type='number'
        min={0.00}
        step={0.01}
      />
      {error && <span className='sui-error-message'>{error}</span>}
    </div>
  );
};

export default MoneyInput;
