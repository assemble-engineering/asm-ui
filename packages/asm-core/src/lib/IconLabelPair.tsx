import { Flex } from './Flex';
import { Image } from './Image';
import { Icon } from './Icon';
import React from 'react';

export type IconLabelPairProps = {
  image?: string;
  alt?: string;
  icon?: string;
  iconSize?: "big" | "small" | "large" | "mini" | "tiny" | "huge" | "massive";
  textColor?: string;
  label: string;
  header?: string;
  headerElement?: string;
  className?: string;
  labelElement: string | React.FunctionComponent<any>;
}

export const IconLabelPair = ({
  image,
  alt,
  icon,
  iconSize = "huge",
  textColor = 'white',
  label,
  header,
  headerElement = 'p',
  className = "asm-icon-label-pair",
  labelElement = 'p'
}: IconLabelPairProps) => {
  return (
    <div className={className}>
      <Flex
        justify='center'
        alignment='center'
        style={{
          width: '250px',
          height: '75px',
        }}
      >
        {!!image && (
          <Image
            src={image}
            style={{ color: 'white', height: '25px', width: '25px' }}
            alt={alt || ''}
          />
        )}
        {!!icon && (
          <Icon
            style={{ color: textColor }}
            size={iconSize}
            name={icon}
          />
        )}
        {header && React.createElement(headerElement, {className: "asm-icon-label-pair-header" }, header)}
      </Flex>
      {
        React.createElement(
          labelElement,
          {
            style: {
              textAlign: 'left',
              fontStyle: 'italic',
              width: '100%',
            },
            className: 'asm-icon-label-pair-label'
          },
          label
        )
      }
    </div>
  );
};

export default IconLabelPair;
