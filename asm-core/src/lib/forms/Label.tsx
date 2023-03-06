export type LabelTypes = {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
  className?: string;
  requiredColor?: string;
  style?: React.CSSProperties;
};

export const Label = ({
  className='asm-label',
  htmlFor,
  children,
  required,
  requiredColor = '#9f3a38',
  style
}: LabelTypes): JSX.Element => (
  <label style={style} className={className} htmlFor={htmlFor}>
    {children} {required && <span style={{ color: requiredColor }}> *</span>}
  </label>
);
