"use client";

import classNames from 'classnames';
import { Flex } from './Flex';
import { Icon } from './Icon';

type AlertType = {
  type: 'warning' | 'error' | 'success' | 'info';
  active: boolean;
  message: string;
}

export type AlertProps = {
  alert: AlertType;
  topPadding?: boolean;
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
  appendClassName?: string;
  closeIcon?: string | React.ReactNode;
  closeIconColor?: string;
  style?: React.CSSProperties;
  handleClose?: (e: any) => void;
}

export const Alert = ({
  style = { position: 'absolute', top: 0, left: 0, right: 0 },
  alert,
  topPadding,
  handleClose,
  className='asm-alert',
  appendClassName,
  closeIcon,
  closeIconColor='#333',
  children,
}: AlertProps) => {
  let sharedStyles: {[key: string]: any} = {
    width: '100%',
    transition: 'transform 200ms ease',
    zIndex: 3,
  };

  sharedStyles = { ...sharedStyles, ...style };

  const styles = !alert.active
    ? { ...sharedStyles, ...{ transform: 'translateY(0)' } }
    : { ...sharedStyles, ...{ transform: 'translateY(100%)' } };

  return (
      <Flex className={classNames(className, alert.type, appendClassName)} justify='space-between' style={{...styles}}>
        <Flex.Column style={topPadding ? { paddingTop: '.5em' } : {}}>
          {alert.message && <p>{alert.message}</p>}
          {children}
        </Flex.Column>
        {handleClose && (
          <Flex.Column grow={0}>
            <button
              style={{ color: 'white' }}
              className='button--transparent'
              onClick={handleClose}
              aria-label='Close alert dialog'
            >
              {typeof closeIcon === 'string' ?
                <Icon name={closeIcon} color={closeIconColor} /> :
                <Icon color={closeIconColor}>{closeIcon}</Icon>
              }
            </button>
          </Flex.Column>
        )}
      </Flex>
  );
};
