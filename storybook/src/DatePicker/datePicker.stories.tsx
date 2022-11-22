import React from 'react';
import {DatePicker} from '@assemble-inc/core';

export default {
  title: 'Input/DatePicker',
  component: DatePicker,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <DatePicker {...args} />

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
  id: "my-date-picker",
  name: 'date-picker',
  label: "Date Picker Label",
  required: true,
  initialValue: new Date(),
  onChange: date => console.log("new date", date)
}
