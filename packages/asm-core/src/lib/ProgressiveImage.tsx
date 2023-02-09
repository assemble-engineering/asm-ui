import { useEffect, useState } from 'react';
import { Text } from './Text';

export type ProgressiveImageProps = {
  src: string;
  placeholder: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  alt?: string;
  caption?: string;
  captionClassName?: string;
  responsive?: boolean;
  style?: React.CSSProperties;
}

export const ProgressiveImage = ({ src, placeholder, width, height, className="asm-progressive-image", style, caption, captionClassName='asm-image-caption', alt, responsive, ...rest }: ProgressiveImageProps) => {
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
    <figure className={className} style={style}>
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
