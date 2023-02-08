import { createElement } from 'react';

export type TextTypes = {
  element?: 'p' | 'span' | 'code' | 'pre' | 'figcaption';
  className?: string;
  children: React.ReactNode;
}

export const Text = ({ element='p', className='asm-text', children }: TextTypes): JSX.Element => {
  return (
    createElement(element, { className: className }, children)
  );
}
