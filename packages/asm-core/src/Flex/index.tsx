import style from './flex.module.scss';

type FlexProps = {
  children: React.ReactNode | React.ReactChildren;
  wrap?: boolean;
  direction?: string;
  reversed?: boolean;
  alignment?: string;
  justify?: string;
  className?: string;
  style?: React.CSSProperties;
};

type FlexColumnTypes = {
  grow?: number;
  shrink?: number;
  basis?: string;
  alignSelf?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode | React.ReactChildren;
};

export const Flex = ({
  style: addedStyle,
  wrap = false,
  direction = 'row',
  reversed,
  alignment,
  justify,
  className,
  children,
}: FlexProps): JSX.Element => {
  const classes = [
    style['asm-flex'],
    wrap && style['asm-flex--wrap'],
    reversed && style['asm-flex--reverse'],
    direction && style[`asm-flex--${direction}`],
    alignment && style[`asm-flex--align-${alignment}`],
    justify && style[`asm-flex--justify-${justify}`],
    className && className,
  ].join(' ');

  return (
    <div className={classes} style={addedStyle}>
      {children}
    </div>
  );
};

const FlexColumn = ({
  grow = 1,
  shrink = 1,
  basis = 'auto',
  alignSelf = 'auto',
  style,
  children,
}: FlexColumnTypes): JSX.Element => (
  <div
    className="asm-flex__column"
    style={{
      flex: `${grow} ${shrink} ${basis}`,
      alignSelf: alignSelf, // eslint-disable-line
      ...style,
    }}
  >
    {children}
  </div>
);

Flex.Row = Flex;
Flex.Column = FlexColumn;
