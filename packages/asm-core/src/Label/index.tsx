type LabelTypes = {
  htmlFor: string;
  children: React.ReactNode | React.ReactChildren;
  className?: string;
};

export const Label = ({ className='asm-label', htmlFor, children }: LabelTypes): JSX.Element => (
  <label className={className} htmlFor={htmlFor}>
    {children}
  </label>
);
