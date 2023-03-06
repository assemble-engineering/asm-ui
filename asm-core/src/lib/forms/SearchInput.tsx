import classNames from 'classnames';
import { Input } from './Input';
import { Button } from '../Button';

export type SearchInputProps = {
  id: string;
  onChange: (e: any) => void;
  onClick?: (e: any) => void;
  onClear?: (e: any) => void;
  label: string;
  labelClassName?: string;
  style?: React.CSSProperties;
  loading?: boolean;
  placeholder?: string;
  value: string;
  clearButtonVisible?: boolean;
  className?: string;
}

export const SearchInput = ({
  id,
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
  className = 'asm-input'
}: SearchInputProps) => {
  const classes = [className, onClick && 'asm-search-input--onClick'];

  return (
      <Input
        id={id}
        label={label}
        labelClassName={labelClassName}
        className={classNames(classes)}
        style={style}
        type='search'
        loading={loading}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        iconLeft={value?.length && !onClick ? undefined : 'left'}
        iconRight={
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
