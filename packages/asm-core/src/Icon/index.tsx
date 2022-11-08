import React from 'react'
import PropTypes from 'prop-types';
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

Icon.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Formatted to appear bordered. */
  bordered: PropTypes.bool,

  /** Icon can formatted to appear circular. */
  circular: PropTypes.bool,

  /** Additional classes. */
  className: PropTypes.string,

  /** Color of the icon. */
  color: PropTypes.string,

  /** Icons can display a smaller corner icon. */
  corner: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['top left', 'top right', 'bottom left', 'bottom right']),
  ]),

  /** Fitted, without space to left or right of Icon. */
  fitted: PropTypes.bool,

  /** Icon can be flipped. */
  flipped: PropTypes.oneOf(['horizontally', 'vertically']),

  /** Formatted to have its colors inverted for contrast. */
  inverted: PropTypes.bool,

  /** Icon can be used as a simple loader. */
  loading: PropTypes.bool,

  /** Icon can rotated. */
  rotated: PropTypes.oneOf(['clockwise', 'counterclockwise']),

  /** Size of the icon. */
  size: PropTypes.oneOf([
    'mini',
    'tiny',
    'small',
    'large',
    'big',
    'huge',
    'massive',
  ]),

  /** Icon can have an aria label. */
  'aria-hidden': PropTypes.string,

  /** Icon can have an aria label. */
  'aria-label': PropTypes.string,
};

Icon.defaultProps = {
  as: 'i',
};

export default Icon;
