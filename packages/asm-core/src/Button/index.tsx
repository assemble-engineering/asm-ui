import React from 'react';

type ButtonTypes = {
  id?: string;
  children: any;
  element?: 'button' | 'a';
  type?: 'button' | 'submit';
  disabled?: boolean;
  href?: string;
  target?: string;
  onClick?: () => void;
  tabIndex?: string;
  collapsed?: boolean;
  hidden?: boolean;
  download?: boolean;
  ariaLabel?: string;
  className?: string;
  childClassName?: string;
};

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
}: ButtonTypes): JSX.Element => {
  return (
    React.createElement(
      element,
      {
        id: id,
        className: className,
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
      },
      React.createElement('span', { className: childClassName }, children)
    )
  );
};

Button.defaultProps = {
  id: null,
  className: 'asm-button',
  childClassName: 'asm-button-child',
  element: 'button',
  type: 'button',
  disabled: false,
  href: null,
  target: null,
  onClick: null,
  tabIndex: '0',
  collapsed: false,
  hidden: false,
  download: false
};
