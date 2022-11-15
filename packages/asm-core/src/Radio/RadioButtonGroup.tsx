import RadioButton from './RadioButton';
import Icon from '../Icon';

type Option = {
  id: string;
  value: string;
  labelText: string;
  icon: string;
}

type RadioButtonGroupProps = {
  id: string;
  options: Option[];
  onChange: (e: any) => void;
  onBlur: (e: any) => void;
  onFocus: (e: any) => void;
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
  const radioOnChange = (e: any) => {
    const radioId = id ? id : e.target.id;
    const value = { id: radioId, value: e.target.value };

    onChange(value);
  };

  // renderRadioButtons expects to have options - it takes a list
  // of options and renders the radio buttons for those:
  // options = [ { id, value, labelText }, ... ]
  const renderRadioButtons = () => {
    const domOptions = options.map((radio, i) => {
      const radioId = id ? `${id}-${radio.id}` : radio.id;
      const checked = radio.value === selectedRadio;
      const label = radio.icon ? (
        <Icon name={radio.labelText} color={checked ? 'white' : 'core-dark'} />
      ) : (
        radio.labelText
      );

      return (
        <RadioButton
          key={`radio-${i}`}
          id={radioId}
          value={radio.value}
          checked={checked}
          labelText={label}
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
