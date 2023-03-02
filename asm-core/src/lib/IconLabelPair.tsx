import React from 'react';
import { Flex } from './Flex';
import { Image } from './Image';
import { Icon } from './Icon';

export type IconLabelPairProps = {
  label: string;
  className?: string;
  labelColor?: string;
  labelElement?: string | React.FunctionComponent<any>;
}

export type ImageProps = {
  icon?: never;
  iconColor?: never;
  iconSize?: never;
  image: string;
  imageSize?: string;
  alt?: string;
}

export type IconProps = {
  icon: string | React.ReactNode;
  iconColor?: string;
  iconSize?: "big" | "small" | "large" | "mini" | "tiny" | "huge" | "massive";
  image?: never;
  imageSize?: never;
  alt?: never;
}

export const IconLabelPair = ({
  image,
  alt = '',
  icon,
  iconSize = "huge",
  iconColor = '#333',
  imageSize = '25px',
  label,
  className = "asm-icon-label-pair",
  labelElement = 'p'
}: IconLabelPairProps & (ImageProps | IconProps)) => {
  const renderIcon = () => {
    if (!!icon) {
      if (typeof icon === 'string') {
        <Icon
          color={iconColor}
          size={iconSize}
          name={icon}
        />
      }

      return (
        <Icon
          color={iconColor}
          size={iconSize}
        >
          {icon}
        </Icon>
      )
    }
    else {
      return (
        <Flex alignment='center' className={className}>
          {!!image ? (
            <Image
              src={image}
              style={{ height: imageSize, width: imageSize }}
              alt={alt}
              responsive
            />
          ) : renderIcon()}
          {
            React.createElement(
              labelElement,
              {
                style: {
                  textAlign: 'left',
                  fontStyle: 'italic',
                  width: '100%',
                },
                className: 'asm-text'
              },
              label
            )
          }
        </Flex>
      );
    }
  }
};

export default IconLabelPair;
