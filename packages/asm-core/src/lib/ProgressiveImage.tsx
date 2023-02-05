import { useEffect, useState } from 'react';

type ProgressiveImageProps = {
  src: string;
  placeholder: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  alt?: string;
  responsive?: boolean;
}

export const ProgressiveImage = ({ src, placeholder, width, height, className="asm-progressive-image", alt, responsive, ...rest }: ProgressiveImageProps) => {

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

    return <img
      className={className}
      src={usedSrc}
      alt={alt}
      width={responsive ? '100%' : width}
      height={responsive ? 'auto' : height}
      style={{ transition: 'filter 0.1s ease-out', ...usedEffectStyle }}
      {...rest}
    />

}

export default ProgressiveImage
