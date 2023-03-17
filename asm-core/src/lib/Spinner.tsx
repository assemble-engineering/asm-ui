import classNames from "classnames";

export type SpinnerProps = {
  width?: number;
  thickness?: number;
  color?: string;
  className?: string;
  appendClassName?: string;
};

export const Spinner = ({ className = 'asm-spinner', appendClassName, width = 50, thickness = 8, color = '#034BBD' }: SpinnerProps): JSX.Element => {
  return (
    <div
      className={classNames(className, appendClassName)}
      style={{
        height: width,
        width,
        borderWidth: thickness,
        borderColor: color,
        borderStyle: 'solid',
        borderTopColor: 'transparent',
        borderRadius: '50%'
      }}
    />
  );
};
