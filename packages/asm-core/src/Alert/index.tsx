import { Container } from '../Container';
import { Flex } from '../Flex';
import { Icon } from '../Icon';

type AlertType = {
  type: 'warning' | 'error' | 'success' | 'info';
  active: boolean;
  message: string;
}

type AlertProps = {
  style: React.CSSProperties;
  alert: AlertType;
  topPadding?: boolean;
  children: React.ReactNode | React.ReactChildren;
  handleClose: (e: any) => void;
}

export const Alert = ({
  style,
  alert,
  topPadding,
  handleClose,
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

  const color =
    alert.type === 'warning'
      ? 'yellow'
      : alert.type === 'error'
      ? 'red'
      : alert.type === 'success'
      ? 'green'
      : alert.type === 'info'
      ? 'blue'
      : 'grey';

  return (
    <Container style={{...styles, color}}>
      <Flex justify='space-between'>
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
            >
              <span className='visually-hidden'>Close alert dialog</span>
              <Icon name='close' color='inherit' fitted />
            </button>
          </Flex.Column>
        )}
      </Flex>
    </Container>
  );
};

Alert.defaultProps = {
  style: { position: 'absolute', top: 0, left: 0, right: 0 },
};

export default Alert;
