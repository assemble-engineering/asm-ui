import classNames from 'classnames';
import { createElement } from 'react';

export type TextTypes = {
  element?: 'p' | 'span' | 'code' | 'pre' | 'figcaption';
  style?: 'bold' | 'italic' | 'bold italic' | 'italic bold';
  className?: string;
  children: React.ReactNode;
}

export const Text = ({ element='p', className='asm-text', style, children }: TextTypes): JSX.Element => {
  return (
    createElement(element, { className: classNames(className, element, style) }, children)
  );
}
