import classNames from "classnames";

export type IframeTypes = {
  allow?: string;
  allowFullScreen?: boolean;
  className?: string;
  appendClassName?: string;
  controls?: boolean;
  height?: number | string;
  loading?: 'eager' | 'lazy';
  src: string;
  title: string;
  width?: number | string;
  style?: React.CSSProperties;
}

export const Iframe = ({
  allow,
  allowFullScreen=true,
  className='asm-iframe',
  appendClassName,
  height='100%',
  width='100%',
  loading='lazy',
  src,
  title,
  style
}: IframeTypes): JSX.Element => {
  return (
    <iframe
      allow={allow}
      allowFullScreen={allowFullScreen}
      className={classNames(className, appendClassName)}
      height={height}
      loading={loading}
      src={src}
      title={title}
      width={width}
      style={style}
    ></iframe>
  );
};
