import React from 'react';
import classNames from 'classnames'

export type IconProps = {
  as?: string;
  className?: string;
  color?: string;
  name: string;
  rotate?: number;
  size?: 'mini'|'tiny'|'small'|'large'|'big'|'huge'|'massive';
  ['aria-label']?: string;
  ['aria-hidden']?: string;
  style?: React.CSSProperties;
}

export const Icon = ({
  as = "i",
  className,
  color,
  name,
  rotate,
  size = 'small',
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
  ...rest
}: IconProps) => {

  const getIconAriaOptions = () => {
    const ariaOptions: any = {};
    if (!ariaLabel) {
      ariaOptions['aria-hidden'] = 'true';
    } else {
      ariaOptions['aria-label'] = ariaLabel;
    }

    if (ariaHidden) {
      ariaOptions['aria-hidden'] = ariaHidden;
    }

    return ariaOptions;
  };

  const classes = [
    color,
    name,
    size,
    rotate && `rotate-${rotate}`,
    'icon',
    className,
  ];

  const ElementType = as;
  const ariaOptions = getIconAriaOptions();

  return (
    React.createElement(
      ElementType,
      {...rest, ...ariaOptions, className: classNames(classes)}
    )
  );
};

export default Icon;
