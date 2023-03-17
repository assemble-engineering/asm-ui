import { createElement, CSSProperties } from "react";
import classNames from "classnames";

export type HeadingTypes = {
  element?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  fontStyle?: "bold" | "italic" | "bold italic" | "italic bold";
  style?: Omit<CSSProperties, "fontSize" | "fontWeight" | "fontStyle" | "font">;
  className?: string;
  appendClassName?: string;
  children: React.ReactNode;
};

export const Heading = ({
  element = "h1",
  as,
  fontStyle,
  className = "asm-heading",
  appendClassName,
  style,
  children,
}: HeadingTypes): JSX.Element => {
  return createElement(
    element,
    {
      className: classNames(
        className,
        fontStyle,
        `${as ? as : element}`,
        appendClassName
      ),
      style,
    },
    children
  );
};
