import React from 'react';
import RadioButton from './RadioButton';
import Icon from '../Icon';

type Option = {
  id: string;
  value: string;
  label: string;
  icon: string;
}

type RadioButtonGroupProps = {
  id: string;
  options: Option[];
  onChange: (value: { id: string; value: string; }, e?: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
  required: string;
  legend: string;
  selectedRadio: string;
  className?: string;
}

export const RadioButtonGroup = ({
  id,
  options,
  onChange,
  onBlur,
  onFocus,
  required,
  legend,
  selectedRadio,
  className = "asm-radio-button-group",
}: RadioButtonGroupProps) => {

  const radioOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const radioId = id ? id : e.target.id;
    const value = { id: radioId, value: e.target.value };

    onChange(value, e);
  };

  // renderRadioButtons expects to have options - it takes a list
  // of options and renders the radio buttons for those:
  // options = [ { id, value, label }, ... ]
  const renderRadioButtons = () => {
    const domOptions = options.map((radio, i) => {
      const radioId = id ? `${id}-${radio.id}` : radio.id;
      const checked = radio.value === selectedRadio;
      const label = radio.icon ? (
        <Icon name={radio.label} color={checked ? 'white' : 'core-dark'} />
      ) : (
        radio.label
      );

      return (
        <RadioButton
          key={`radio-${i}`}
          id={radioId}
          value={radio.value}
          checked={checked}
          label={label}
          onChange={radioOnChange}
          onBlur={onBlur}
          onFocus={onFocus}
          required={required ? true : false}
        />
      );
    });

    return domOptions;
  };

  return (
    <>
      <fieldset id={id} className='radio-button-group-fieldset'>
        {legend && <legend className='radio-group__legend'>{legend}</legend>}
        <div className={className}>
          {renderRadioButtons()}
        </div>
      </fieldset>
    </>
  );
};

export default RadioButtonGroup;
