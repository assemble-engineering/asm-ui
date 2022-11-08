import { Flex } from '../Flex';
import { ColumnProps } from '../TwoColumnContainer';

export const ThreeColumnContainer = ({
  children,
  alignment = "start"
}: ColumnProps) => {
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
