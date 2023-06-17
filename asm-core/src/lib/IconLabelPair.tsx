"use client";

import React from 'react';
import { Flex } from './Flex';
import { Image } from './Image';
import { Icon } from './Icon';
import classNames from 'classnames';

export type IconLabelPairProps = {
  label: string;
  className?: string;
  appendClassName?: string;
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
  appendClassName,
  labelElement = 'p'
}: IconLabelPairProps & (ImageProps | IconProps)) => {
  const renderIcon = () => {
    if (typeof icon === 'string') {
      return <Icon
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

  return (
    <Flex alignment='center' className={classNames(className, appendClassName)}>
      {!!image ? (
        <Image
          src={image}
          style={{ height: imageSize, width: imageSize }}
          alt={alt}
          responsive
        />
      ) : icon && renderIcon()}
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
};

export default IconLabelPair;
