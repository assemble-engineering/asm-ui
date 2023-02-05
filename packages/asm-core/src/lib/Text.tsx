import React from 'react';

type TextTypes = {
  element?: 'p' | 'span' | 'code' | 'pre';
  className?: string;
  children: React.ReactNode;
}

export const Text = ({ element='p', className='asm-text', children }: TextTypes): JSX.Element => {
  return (
    React.createElement(element, { className: className }, children)
  );
}
