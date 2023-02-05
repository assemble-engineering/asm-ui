import classNames from 'classnames';
import {Input} from './Input';
import {Button} from '../Button';

export type SearchInputProps = {
  onClick?: (e: any) => void;
  onChange?: (e: any) => void;
  onClear?: (e: any) => void;
  label?: string;
  labelClassName?: string;
  style?: React.CSSProperties;
  loading?: boolean;
  placeholder?: string;
  value: string;
  clearButtonVisible?: boolean;
  className?: string;
}

export const SearchInput = ({
  onClick,
  onChange,
  onClear,
  label,
  labelClassName,
  style,
  loading,
  placeholder,
  value,
  clearButtonVisible = false,
  className = 'asm-search-input'
}: SearchInputProps) => {
  const classes = [className, onClick && 'asm-search-input--onClick'];

  return (
      <Input
        id='search'
        label={label}
        labelClassName={labelClassName}
        className={classNames(classes)}
        style={style}
        type='search'
        loading={loading}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        iconPosition={value?.length && !onClick ? undefined : 'left'}
        icon={
          clearButtonVisible ? (
            <Button
              className='search-button'
              icon='close'
              type='button'
              onClick={onClear}
              style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
              basic
            />
          ) : onClick ? (
            <Button
              className='search-button'
              icon='search'
              type='button'
              onClick={onClick}
              style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
              primary
            />
          ) : (
            'search'
          )
        }
      />
  );
};
