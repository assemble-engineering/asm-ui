import React from 'react';
import style from './flex.module.scss';

type FlexProps = {
  children: React.ReactNode | React.ReactChildren;
  addedStyle?: React.CSSProperties;
  wrap?: boolean;
  direction?: string;
  reversed?: boolean;
  alignment?: string;
  justify?: string;
  className?: string;
};

type FlexColumnTypes = {
  grow?: number;
  shrink?: number;
  basis?: string;
  alignSelf?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode | React.ReactChildren;
};

const Flex = ({
  wrap = false,
  direction = 'row',
  addedStyle,
  reversed,
  alignment,
  justify,
  className,
  children,
}: FlexProps): JSX.Element => {
  const classes = [
    style['asm-flex'],
    wrap && style['asm-flex--wrap'],
    reversed && style['asm-flex--reversed'],
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
    className="flex__column"
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
