import React from 'react';
import {Icon, IconProps} from "./Icon"
import classNames from 'classnames';

export type ButtonTypes = {
  id?: string;
  children?: React.ReactNode;
  element?: 'button' | 'a';
  type?: 'button' | 'submit';
  disabled?: boolean;
  href?: string;
  target?: string;
  onClick?: (e: any) => void;
  tabIndex?: string;
  collapsed?: boolean;
  hidden?: boolean;
  download?: boolean;
  ariaLabel?: string;
  className?: string;
  childClassName?: string;
  icon?: string;
  iconSize?: IconProps['size'];
  iconColor?: string;
  style?: React.CSSProperties;
  basic?: boolean;
  primary?: boolean;
}

export const Button = ({
  type='button',
  element='button',
  className='asm-button',
  childClassName='asm-button-child',
  tabIndex,
  hidden,
  ariaLabel,
  download,
  id,
  href,
  onClick,
  disabled,
  target,
  children,
  style,
  basic,
  primary,
  icon,
  iconSize,
  iconColor='#333'
}: ButtonTypes): JSX.Element => {
  return (
    React.createElement(
      element,
      {
        id: id,
        className: classNames([className, basic && "asm-button-basic", primary && "asm-button-primary"]),
        href: href,
        target: target,
        rel: 'noopener noreferrer',
        onClick: onClick,
        disabled: disabled,
        tabIndex: tabIndex,
        type: type,
        hidden: hidden,
        'aria-label': ariaLabel,
        download: download,
        style
      },
      [
        icon && (typeof icon === 'string' ? <Icon key='button-icon' size={iconSize} name={icon} color={iconColor} /> : <Icon key='button-icon' size={iconSize} color={iconColor}>{icon}</Icon>),
        children && React.createElement('span', { className: childClassName, key: 'button-child' }, children)
      ]
    )
  );
};
