export type SpinnerProps = {
  width?: number;
  thickness?: number;
  color?: string;
  className?: string;
};

export const Spinner = ({ className = 'asm-spinner', width = 50, thickness = 8, color = '#034BBD' }: SpinnerProps): JSX.Element => {
  return (
    <div
      className={className}
      style={{
        height: width,
        width,
        borderWidth: thickness,
        borderColor: color,
        borderStyle: 'solid',
        borderTopColor: 'transparent',
      }}
    />
  );
};
