"use client";

import classNames from "classnames";

export type LabelTypes = {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
  className?: string;
  appendClassName?: string;
  requiredColor?: string;
  style?: React.CSSProperties;
};

export const Label = ({
  className='asm-label',
  appendClassName,
  htmlFor,
  children,
  required,
  requiredColor = '#9f3a38',
  style
}: LabelTypes): JSX.Element => (
  <label style={style} className={classNames(className, appendClassName)} htmlFor={htmlFor}>
    {children} {required && <span style={{ color: requiredColor }}> *</span>}
  </label>
);
