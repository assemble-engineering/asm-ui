import { useMediaQuery } from '../util/useMediaQuery';

type ContainerProps = {
  style: React.CSSProperties;
  className?: string;
  children: React.ReactNode | React.ReactChildren;
  noLimit?: boolean;
}

export const Container = ({
  style,
  noLimit,
  className = 'asm-container',
  children
}: ContainerProps) => {
  const mediaQuery = useMediaQuery();
  const isSmallScreen = mediaQuery === 'xSmall' || mediaQuery === 'small';

  style = noLimit ? { maxWidth: 'none' } : style;

  let containerStyle = isSmallScreen
    ? { maxWidth: '100%', ...style }
    : { maxWidth: '1440px', margin: '0 auto', ...style };

  return (
    <div className={className} style={containerStyle}>
      {children}
    </div>
  );
};

export default Container;
