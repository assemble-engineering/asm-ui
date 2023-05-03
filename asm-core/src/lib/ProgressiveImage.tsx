import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { Text } from './Text';

export type ProgressiveImageProps = {
  src: string;
  placeholder: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  appendClassName?: string;
  alt?: string;
  caption?: string;
  captionClassName?: string;
  responsive?: boolean;
  style?: React.CSSProperties;
}

export const ProgressiveImage = ({ src, placeholder, width, height, className="asm-progressive-image", appendClassName, style, caption, captionClassName='asm-text', alt, responsive, ...rest }: ProgressiveImageProps) => {
  const [ usedSrc, setUsedSrc ] = useState(placeholder);
  const [ usedEffectStyle, setUsedEffectStyle ] = useState<any>({ filter: 'blur(5px)', clipPath: 'inset(0)' });

  useEffect(() => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
          setUsedSrc(img.src);
          setUsedEffectStyle({});
      }
  }, []);

  return (
    <figure className={classNames(className, appendClassName)} style={style}>
      <img
        src={usedSrc}
        alt={alt}
        width={responsive ? '100%' : width}
        height={responsive ? 'auto' : height}
        style={{ transition: 'filter 0.1s ease-out', ...usedEffectStyle }}
        {...rest}
      />
      {caption && <Text element='figcaption' className={captionClassName}>{caption}</Text>}
    </figure>
  );

}

export default ProgressiveImage
