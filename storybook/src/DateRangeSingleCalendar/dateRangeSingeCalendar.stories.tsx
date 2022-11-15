import React from 'react';
import {DateRangeSingleCalendar} from '@assemble-inc/core';

export default {
  title: 'Input/DateRangeSingleCalendar',
  component: DateRangeSingleCalendar,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <>
  <DateRangeSingleCalendar {...args} />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/react-datepicker/4.8.0/react-datepicker.css" integrity="sha512-LwtsMyMcg5iHTd5nkQ7ttOo34gZbsk7hLxJkrVpWHyhdTuQB04rl4+yw0CfKgQtfKDar6U2fHyGBANa/5WAqOw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
</>

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
  id: "my-date-range-picker",
  name: 'date-range-picker',
  label: "Date Picker Label",
  required: true,
  initialStartDate: new Date(),
  onChange: date => console.log("new date", date)
}
