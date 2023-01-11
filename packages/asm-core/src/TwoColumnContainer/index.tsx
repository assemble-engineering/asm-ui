import React from 'react'
import { Flex } from '../Flex';

type ColumnProps = {
  children: React.ReactNode;
  alignment: "center" | "flex-end" | "flex-start";
}

export const TwoColumnContainer = ({
  children,
  alignment = "flex-start"
}: ColumnProps) => {
  if(React.Children.count(children) !== 2){
    throw new Error('TwoColumnContainer must contain exactly 2 children')
  }
  return (
    <div>
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
