import React from 'react';
import { Icon, IconProps } from "./Icon"
import classNames from 'classnames';

type DataAttributeKey = `data-${string}`;

interface HTMLAttributes extends React.HTMLAttributes<any> {
  [dataAttribute: DataAttributeKey]: any;
}


export type ButtonAsButtonProps = {
  type?: 'button' | 'submit';
  clickArea?: boolean;
  download?: never;
  disabled?: boolean;
  onClick?: (e: any) => void;
  href?: never;
  target?: never;
  rel?: never;
}

export type ButtonAsAnchorProps = {
  type?: never;
  clickArea?: never;
  download?: boolean;
  disabled?: never;
  onClick?: never;
  href?: string;
  target?: string;
  rel?: string;
}

export type ButtonTypes = {
  id?: string;
  children?: React.ReactNode;
  element?: 'button' | 'a';
  tabIndex?: string;
  ariaLabel?: string;
  className?: string;
  childClassName?: string;
  icon?: string;
  iconSize?: IconProps['size'];
  iconColor?: string;
  style?: React.CSSProperties;
  basic?: boolean;
  primary?: boolean;
  dataAttribute: HTMLAttributes;
}

export const Button = ({
  type = 'button',
  element = 'button',
  className = 'asm-button',
  childClassName = 'asm-button-child',
  clickArea,
  tabIndex,
  ariaLabel,
  download,
  id,
  href,
  rel,
  onClick,
  disabled,
  target,
  children,
  style,
  basic,
  primary,
  icon,
  iconSize,
  iconColor = '#333',
  dataAttribute
}: ButtonTypes & (ButtonAsButtonProps | ButtonAsAnchorProps)): JSX.Element => {
  return (
    React.createElement(
      element,
      {
        id: id,
        className: classNames([className, basic && "asm-button-basic", primary && "asm-button-primary", clickArea && "asm-button-transparent"]),
        href: href,
        target: target,
        rel: rel,
        onClick: onClick,
        disabled: disabled,
        tabIndex: tabIndex,
        type: type,
        'aria-label': ariaLabel,
        download: download,
        style,
        dataAttribute
      },
      [
        icon && (typeof icon === 'string' ? <Icon key='button-icon' size={iconSize} name={icon} color={iconColor} /> : <Icon key='button-icon' size={iconSize} color={iconColor}>{icon}</Icon>),
        children && React.createElement('span', { className: childClassName, key: 'button-child' }, children)
      ]
    )
  );
};
