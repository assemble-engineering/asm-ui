import { Children, ReactNode } from 'react';
import { Flex } from './Flex';

export type ColumnProps = {
  children: ReactNode[];
  alignment: "center" | "flex-end" | "flex-start";
}

export const ThreeColumnContainer = ({
  children,
  alignment = "flex-start"
}: ColumnProps) => {
  if(Children.count(children) !== 3){
    throw new Error('ThreeColumnContainer must contain exactly 3 children')
  }
  return (
    <div>
      {children && children[0] && children[1] && children[2] &&
        <Flex justify='space-around' alignment={alignment}>
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
          <Flex.Column>
            <Flex direction='column' alignment={alignment}>
              {children[2]}
            </Flex>
          </Flex.Column>
        </Flex>
      }
    </div>
  );
};


export default ThreeColumnContainer;
