import classNames from "classnames";

export type DividerProps = {
  className?: string;
  appendClassName?: string;
  vertical?: boolean;
  style?: React.CSSProperties;
}

export const Divider = (
  (props: DividerProps) => {
    const {
      className = 'asm-divider',
      appendClassName,
      vertical,
      ...rest
    } = props;

    return (
      <hr
        role="separator"
        {...rest}
        className={classNames(className, appendClassName)}
        aria-orientation={vertical ? 'vertical' : 'horizontal'}
      />
    );
  }
);

export default Divider;
