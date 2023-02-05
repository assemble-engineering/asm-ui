import { createElement } from 'react';

export type HeadingTypes = {
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  children: React.ReactNode;
}

export const Heading = ({ element='h1', className='asm-heading', children }: HeadingTypes): JSX.Element => {
  return (
    createElement(element, { className: className }, children)
  );
}
