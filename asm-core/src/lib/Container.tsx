"use client";

import { useMediaQuery } from '@assemble-inc/util';
import classNames from 'classnames';

export type ContainerProps = {
  style?: React.CSSProperties;
  className?: string;
  appendClassName?: string;
  children: React.ReactNode;
  maxWidth?: string;
}

export const Container = ({
  style,
  className = 'asm-container',
  appendClassName,
  maxWidth = 'none',
  children
}: ContainerProps) => {
  const mediaQuery = useMediaQuery();
  const isSmallScreen = typeof window !== 'undefined' && (mediaQuery === 'xSmall' || mediaQuery === 'small');

  let containerStyle = isSmallScreen
    ? { maxWidth: '100%', ...style }
    : { maxWidth, margin: '0 auto', ...style };

  return (
    <div className={classNames(className, appendClassName)} style={containerStyle}>
      {children}
    </div>
  );
};

export default Container;
