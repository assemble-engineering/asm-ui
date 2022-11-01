type CommonProps = { alt: string; src: string; className?: string; };

type ImageProps =
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
  height,
  width,
  responsive,
  ...rest
}: ImageProps): JSX.Element => {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      width={responsive ? '100%' : width}
      height={responsive ? 'auto' : height}
      {...rest}
    />
  );
};
