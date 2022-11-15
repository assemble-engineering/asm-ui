import React from 'react';
import {TimePicker} from '@assemble-inc/core';

export default {
  title: 'Input/TimePicker',
  component: TimePicker,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <>
  <TimePicker {...args} />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/react-datepicker/4.8.0/react-datepicker.css" integrity="sha512-LwtsMyMcg5iHTd5nkQ7ttOo34gZbsk7hLxJkrVpWHyhdTuQB04rl4+yw0CfKgQtfKDar6U2fHyGBANa/5WAqOw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
</>

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
