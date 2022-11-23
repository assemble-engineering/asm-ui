export interface DividerProps {
  className?: string;
  vertical?: boolean;
  style?: React.CSSProperties;
}

export const Divider = (
  (props: DividerProps) => {
    const {
      className = 'asm-divider',
      vertical,
      ...rest
    } = props;

    return (
      <hr
        role="separator"
        {...rest}
        className={className}
        aria-orientation={vertical ? 'vertical' : 'horizontal'}
      />
    );
  }
);

export default Divider;
