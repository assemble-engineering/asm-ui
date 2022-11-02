import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

export const Portal = ({ children, onClose }: {onClose: () => void; children: React.ReactNode | React.ReactChildren}): JSX.Element => {
  useEffect(() => {
    const modalKeyDown = (event: any) => {
      if (event.key === 'Escape' || event.key === 'Esc') {
        onClose();
      }
    };

    document.body.classList.add('no-scroll');
    window.addEventListener('keydown', modalKeyDown);

    return () => {
      document.body.classList.remove('no-scroll');
      window.removeEventListener('keydown', modalKeyDown);
    };
  }, []);

  return createPortal(
    <>{children}</>,
    document.body
  );
};
