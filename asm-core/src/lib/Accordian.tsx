import { useState, Children } from "react";
import { Flex } from './Flex';
import { Icon } from "./Icon";

const Accordian = ({
  children,
  className = "asm-accordian",
  bellowClassName = "asm-accordian-bellow",
  accordianHeadingClassName = "asm-accordian-header",
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
  accordianHeadingClassName?: string;
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

  const accordianStyle = {
    display: "grid",
    "grid-template-rows": "0fr",
    transition: "grid-template-rows 300ms ease-in-out"
  };

  const accordianStyleExpanded = {
    ...accordianStyle,
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
          <span className={accordianHeadingClassName}>{headingText}</span>
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
        style={expanded ? accordianStyle : accordianStyleExpanded}
        className={className}
      >
        {renderBellows()}
      </div>
    </>
  );
};

export default Accordian;
