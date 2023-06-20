"use client";

import React from 'react';
import {RadioButton} from './RadioButton';
import {ErrorType} from "./Input"
import classNames from 'classnames';

export type Option = {
  id: string;
  value: string;
  label: string;
}

type RadioButtonGroupProps = ErrorType & {
  id: string;
  options: Option[];
  onChange: (value: { id: string; value: string; }, e?: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  required?: boolean;
  legend: string;
  selectedRadio: string;
  className?: string;
  appendClassName?: string;
  style?: React.CSSProperties;
  radioButtonStyle?: React.CSSProperties;
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
  appendClassName,
  error,
  errorClassName,
  style,
  radioButtonStyle
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
      const radioId = `${id}-${radio.id}`;
      const checked = radio.value === selectedRadio;

      return (
        <RadioButton
          key={`radio-${i}`}
          id={`${radioId}-${i}`}
          value={radio.value}
          checked={checked}
          label={radio.label}
          onChange={radioOnChange}
          onBlur={onBlur}
          onFocus={onFocus}
          required={required}
          style={radioButtonStyle}
        />
      );
    });

    return domOptions;
  };

  return (
      <fieldset style={style} id={id} className='asm-radio-button-group-fieldset'>
        {legend && <legend className='asm-text'>{legend}</legend>}
        <div className={classNames(className, appendClassName)}>
          {renderRadioButtons()}
        </div>
        <span className={errorClassName}>{error}</span>
      </fieldset>
  );
};
