import React from 'react';
import {TimePicker} from '@assemble-inc/core';

export default {
  title: 'Input/TimePicker',
  component: TimePicker,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <TimePicker {...args} />

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
  id: "my-time-picker",
  name: 'time-picker',
  label: "Time Picker Label",
  required: true,
  initialValue: new Date(),
  onChange: date => console.log("new time", date)
}
