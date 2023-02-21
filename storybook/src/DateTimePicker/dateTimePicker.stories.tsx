import { DatePicker } from '@assemble-inc/core';

export default {
  title: 'Input/DateTimePicker',
  component: DatePicker,
};

//👇 We create a “template” of how args map to rendering
const Template = (args: React.ComponentProps<typeof DatePicker>) => <DatePicker {...args} />

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
  id: "my-date-picker",
  name: 'date-picker',
  label: "Date Picker Label",
  required: true,
  initialDate: new Date(),
  onChange: (date: Date) => console.log("new date", date),
  showTimeSelect: true,
}
