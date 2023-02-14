import { createElement } from 'react';
import classNames from 'classnames';

export type HeadingTypes = {
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  fontStyle?: 'bold' | 'italic' | 'bold italic' | 'italic bold';
  className?: string;
  children: React.ReactNode;
}

export const Heading = ({ element='h1', as, fontStyle, className='asm-heading', children }: HeadingTypes): JSX.Element => {
  return (
    createElement(element, { className: classNames(className, fontStyle, `${as ? as : element}`) }, children)
  );
}
