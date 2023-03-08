import classNames from 'classnames';
import { createElement, CSSProperties } from 'react';

export type TextTypes = {
  element?: 'p' | 'span' | 'code' | 'pre' | 'figcaption';
  size?: 'small' | 'large';
  fontStyle?: 'bold' | 'italic' | 'bold italic' | 'italic bold';
  style?: Omit<CSSProperties, 'fontSize' | 'fontWeight' | 'fontStyle' | 'font'>;
  className?: string;
  children: React.ReactNode;
}

export const Text = ({ element='p', className='asm-text', style, fontStyle, size, children }: TextTypes): JSX.Element => {
  return (
    createElement(element, { className: classNames(className, element, size, fontStyle), style }, children)
  );
}
