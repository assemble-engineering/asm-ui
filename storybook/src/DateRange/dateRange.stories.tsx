import React from 'react';
import {DateRange, Flex} from '@assemble-inc/core';

export default {
  title: 'Input/DateRange',
  component: DateRange,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <>
<Flex>
  <DateRange {...args} />
</Flex>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/react-datepicker/4.8.0/react-datepicker.css" integrity="sha512-LwtsMyMcg5iHTd5nkQ7ttOo34gZbsk7hLxJkrVpWHyhdTuQB04rl4+yw0CfKgQtfKDar6U2fHyGBANa/5WAqOw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
</>

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
  onChange: (range) => console.log("start", range[0], "end", range[1])
}
