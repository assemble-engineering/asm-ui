import React from 'react';
import classNames from 'classnames'

export type IconProps = {
  as?: string;
  bordered?: boolean;
  circular?: boolean;
  className?: string;
  color?: string;
  corner?: 'top left' | 'top right' | 'bottom left' | 'bottom right';
  fitted?: boolean;
  flipped?: 'horizontally' | 'vertically';
  inverted?: boolean;
  loading?: boolean;
  name: string;
  rotated?: 'clockwise' | 'counterclockwise';
  size?: 'mini'|'tiny'|'small'|'large'|'big'|'huge'|'massive';
  ['aria-label']?: string;
  ['aria-hidden']?: string;
  style?: React.CSSProperties;
}

export const Icon = ({
  as = "i",
  bordered,
  circular,
  className,
  color,
  corner,
  fitted,
  flipped,
  inverted,
  loading,
  name,
  rotated,
  size = 'small',
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden,
  ...rest
}: IconProps) => {

  const getIconAriaOptions = () => {
    const ariaOptions = {};
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
    bordered && 'bordered',
    circular && 'circular',
    fitted && 'fitted',
    inverted && 'inverted',
    loading && 'loading',
    corner && `corner ${corner}`,
    flipped && `flipped ${flipped}`,
    rotated && `rotated ${rotated}`,
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
