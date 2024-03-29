import classNames from 'classnames';
import {Children, ReactNode} from 'react'
import { Flex } from './Flex';

export type ColumnProps = {
  children: ReactNode[];
  alignment: "center" | "flex-end" | "flex-start";
  className?: string;
}

export const TwoColumnContainer = ({
  children,
  alignment = "flex-start",
  className,
}: ColumnProps) => {
  if(Children.count(children) !== 2){
    throw new Error('TwoColumnContainer must contain exactly 2 children')
  }
  return (
    <div className={classNames(className)}>
      {children && children[0] && children[1] && <Flex justify='space-around' alignment={alignment}>
        <Flex.Column>
          <Flex direction='column' alignment={alignment}>
            {children[0]}
          </Flex>
        </Flex.Column>
        <Flex.Column>
          <Flex direction='column' alignment={alignment}>
            {children[1]}
          </Flex>
        </Flex.Column>
      </Flex>}
    </div>
  );
};


export default TwoColumnContainer;
