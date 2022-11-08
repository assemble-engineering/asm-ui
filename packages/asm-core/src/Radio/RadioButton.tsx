import PropTypes from 'prop-types';

export type RadioButtonProps = {
  id: string;
  value: string;
  checked: boolean;
  onChange: (e: any) => void;
  onBlur?: (e: any) => void;
  onFocus?: (e: any) => void;
  required?: boolean;
  labelText: string | JSX.Element;
  className?: string;
}

export const RadioButton = ({
  id,
  value,
  checked,
  onChange,
  onBlur,
  onFocus,
  required,
  labelText,
  className = 'asm-radio-button'
}: RadioButtonProps) => {
  return (
    <span className={className}>
      <input
        id={id}
        type='radio'
        value={value}
        className='radio-button visually-hidden'
        checked={checked}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        required={required ? true : false}
      />
      <label className='radio-button__label' htmlFor={id}>
        <span className='radio-button__custom-box'>
          <span className='radio-button__label__text'>{labelText}</span>
        </span>
      </label>
    </span>
  );
};

RadioButton.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  required: PropTypes.bool,
  labelText: PropTypes.string,
};

export default RadioButton;
