import { ReactNode, useEffect, useRef } from 'react';
import {Portal} from './Portal';

export type ModalProps = {
  open: boolean;
  onClose: (e: any) => void;
  children: ReactNode;
  ariaModalLabel: string;
  ariaCloseLabel: string;
};
export const Modal = ({open, onClose, children, ariaModalLabel, ariaCloseLabel }: ModalProps): JSX.Element | null => {
  const modalRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    modalRef.current?.focus();

    const trapFocus = (e: any) => {
      const focusableEls = modalRef.current?.querySelectorAll(
        'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
      );
      const firstFocusableEl = focusableEls && focusableEls[0];
      const lastFocusableEl = focusableEls && focusableEls[focusableEls.length - 1];

      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusableEl) {
            // @ts-ignore
            lastFocusableEl.focus();
            e.preventDefault();
          }
        } /* tab */ else {
          if (document.activeElement === lastFocusableEl) {
            // @ts-ignore
            firstFocusableEl.focus();
            e.preventDefault();
          }
        }
      }
    };

    modalRef.current?.addEventListener('keydown', trapFocus);

    return () => {
      modalRef.current?.removeEventListener('keydown', trapFocus);
    };
  }, [modalRef.current]);

  if (open) {
    return (
      <Portal onClose={onClose}>
        <aside
          ref={modalRef}
          className='asm-modal-overlay'
          role="dialog"
          aria-label={ariaModalLabel}
          aria-modal="true"
          tabIndex={-1}
        >
          <div className='asm-modal'>
            <div className='asm-modal-content'>
              {children}
              <button
                onClick={onClose}
                className="modal-close"
                aria-label={ariaCloseLabel}
              />
            </div>
          </div>
        </aside>
      </Portal>
    );
  }
  return null;
};
