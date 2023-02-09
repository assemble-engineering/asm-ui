import { Text } from './Text';

export type CommonProps = {
  alt: string;
  src: string;
  caption?: string;
  captionClassName?: string;
  className?: string;
  style?: React.CSSProperties};

export type ImageProps =
  | ({ responsive: true; width?: never; height?: never } & CommonProps)
  | ({
      responsive?: false;
      width?: number | string;
      height?: number | string;
    } & CommonProps);

export const Image = ({
  alt,
  className='asm-image',
  src,
  caption,
  captionClassName='asm-image-caption',
  height,
  width,
  responsive,
  style,
  ...rest
}: ImageProps): JSX.Element => {
  return (
    <figure
      style={style}
      className={className}
    >
      <img
        src={src}
        alt={alt}
        width={responsive ? '100%' : width}
        height={responsive ? 'auto' : height}
        {...rest}
      />
      {caption && <Text element='figcaption' className={captionClassName}>{caption}</Text>}
    </figure>
  );
};
