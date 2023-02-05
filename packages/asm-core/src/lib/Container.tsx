import { useMediaQuery } from '@assemble-inc/util';

export type ContainerProps = {
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
  maxWidth?: string;
}

export const Container = ({
  style,
  className = 'asm-container',
  maxWidth = 'none',
  children
}: ContainerProps) => {
  const mediaQuery = useMediaQuery();
  const isSmallScreen = mediaQuery === 'xSmall' || mediaQuery === 'small';

  let containerStyle = isSmallScreen
    ? { maxWidth: '100%', ...style }
    : { maxWidth, margin: '0 auto', ...style };

  return (
    <div className={className} style={containerStyle}>
      {children}
    </div>
  );
};

export default Container;
