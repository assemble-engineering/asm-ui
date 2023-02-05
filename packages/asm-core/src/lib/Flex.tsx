import React from 'react';

export type FlexProps = {
  children: React.ReactNode | React.ReactNode[];
  wrap?: boolean;
  direction?: 'row' | 'column';
  reversed?: boolean;
  alignment?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
  gap?: '10px',
  className?: string;
  style?: React.CSSProperties;
};

export type FlexColumnTypes = {
  grow?: number;
  shrink?: number;
  basis?: string;
  alignSelf?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode | React.ReactNode[];
};

export const Flex = ({
  style: addedStyle,
  wrap = false,
  direction = 'row',
  reversed = false,
  alignment = 'flex-start',
  justify = 'flex-start',
  gap = '10px',
  className,
  children,
}: FlexProps): JSX.Element => {
  const baseStyle: any = {
    position: 'relative',
    boxSizing: 'border-box',
    display: 'flex',
    width: '100%',
    maxWidth: '100%',
    gap: gap,
    flexWrap: wrap ? 'wrap' : 'no-wrap',
    flexDirection: reversed ? `${direction}-reverse` : direction,
    alignItems: alignment,
    justifyContent: justify
  }

  return (
    <div className={className ? className : ''} style={{...baseStyle, ...addedStyle}}>
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
    style={{
      flex: `${grow} ${shrink} ${basis}`,
      alignSelf: alignSelf,
      ...style,
    }}
  >
    <>
      {children}
    </>
  </div>
);

Flex.Row = Flex;
Flex.Column = FlexColumn;
