import {DateRange, Flex} from '@assemble-inc/core';

export default {
  title: 'Input/DateRange',
  component: DateRange,
};

//👇 We create a “template” of how args map to rendering
const Template = (args: React.ComponentProps<typeof DateRange>) =>(
  <Flex>
    <DateRange {...args} />
  </Flex>
)

//👇 Each story then reuses that template
export const Primary = Template.bind({});


const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

Primary.args = {
  dateStartId: 'date-range-start',
  dateStartLabel: 'Start date',
  dateStartName: 'date-range-start-name',
  dateEndId: 'date-range-end',
  dateEndLabel: 'End date',
  dateEndName: 'date-range-end-name',
  initialDateStart: new Date(),
  initialDateEnd: tomorrow,
  required: true,
  onChange: (range: Date[]) => console.log("start", range[0], "end", range[1])
}
