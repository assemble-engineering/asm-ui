import classNames from 'classnames';
import { Text } from './Text';

export type CommonProps = {
  alt: string;
  src: string;
  caption?: string;
  captionClassName?: string;
  className?: string;
  appendClassName?: string;
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
  appendClassName,
  src,
  caption,
  captionClassName='asm-text',
  height,
  width,
  responsive,
  style,
  ...rest
}: ImageProps): JSX.Element => {
  return (
    <figure
      style={style}
      className={classNames(className, appendClassName)}
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
