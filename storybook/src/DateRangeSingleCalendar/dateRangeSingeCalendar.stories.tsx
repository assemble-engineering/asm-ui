import {DateRangeSingleCalendar} from '@assemble-inc/core';

export default {
  title: 'Input/DateRangeSingleCalendar',
  component: DateRangeSingleCalendar,
};

//👇 We create a “template” of how args map to rendering
const Template = (args: React.ComponentProps<typeof DateRangeSingleCalendar>) => <DateRangeSingleCalendar {...args} />

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
  id: "my-date-range-picker",
  name: 'date-range-picker',
  label: "Date Picker Label",
  required: true,
  initialStartDate: new Date(),
  onChange: (date: Date) => console.log("new date", date)
}
