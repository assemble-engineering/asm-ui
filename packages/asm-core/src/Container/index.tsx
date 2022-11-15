import { useMediaQuery } from '../util/useMediaQuery';

type ContainerProps = {
  style: React.CSSProperties;
  className?: string;
  children: React.ReactNode | React.ReactChildren;
  noLimit?: boolean;
  maxWidth?: string;
}

export const Container = ({
  style,
  noLimit,
  className = 'asm-container',
  maxWidth = '1440px',
  children
}: ContainerProps) => {
  const mediaQuery = useMediaQuery();
  const isSmallScreen = mediaQuery === 'xSmall' || mediaQuery === 'small';

  style = noLimit ? { maxWidth: 'none' } : style;

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
