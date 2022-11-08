import { Flex } from '../Flex';

export type ColumnProps = {
  children: React.ReactNode | React.ReactChildren;
  alignment: "center" | "end" | "start";
}

export const TwoColumnContainer = ({
  children,
  alignment = "start"
}: ColumnProps) => {
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
