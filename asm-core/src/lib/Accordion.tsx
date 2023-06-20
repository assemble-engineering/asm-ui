"use client";

import { Children, useState } from "react";
import { Flex } from './Flex';
import { Icon } from "./Icon";

export const Accordion = ({
  children,
  className = "asm-accordion",
  bellowClassName = "asm-accordion-bellow",
  accordionHeadingClassName = "asm-accordion-header",
  headingText = "Header",
  onClick,
  icon,
  iconSize = 'small',
  iconColor = "#000"
}: {
  children: React.ReactNode;
  className?: string;
  bellowClassName?: string;
  headingText?: string;
  accordionHeadingClassName?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  icon?: React.ReactNode;
  iconSize?: "small" | "big" | "mini" | "tiny" | "large" | "huge" | "massive" | undefined;
  iconColor?: string;
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setExpanded((prevState) => !prevState);
    onClick && onClick(e);
  };

  const accordionStyle = {
    display: "grid",
    "grid-template-rows": "0fr",
    transition: "grid-template-rows 300ms ease-in-out"
  };

  const accordionStyleExpanded = {
    ...accordionStyle,
    "grid-template-rows": "1fr"
  };

  const bellowStyle = {
    overflow: "hidden"
  };

  const buttonStyle = {
    background: 'none',
    border: 0,
    "box-shadow": "none",
    padding: 0,
    display: "block",
    width: "100%"
  };

  const renderBellows = () => {
    const childrenArr = Children.toArray(children);

    return childrenArr.map((child) => (
      <div style={bellowStyle} className={bellowClassName}>
        {child}
      </div>
    ));
  };

  return (
    <>
      <button style={buttonStyle} onClick={handleClick}>
        <Flex justify='space-between' alignment='center'>
          <span className={accordionHeadingClassName}>{headingText}</span>
          {icon && (
            <Icon
              rotate={expanded ? 0 : 180}
              size={iconSize}
              color={iconColor}
            >
              {icon}
            </Icon>
          )}
        </Flex>
      </button>
      <div
        style={expanded ? accordionStyle : accordionStyleExpanded}
        className={className}
      >
        {renderBellows()}
      </div>
    </>
  );
};
