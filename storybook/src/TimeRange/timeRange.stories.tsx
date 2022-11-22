import React from 'react';
import {TimeRange, Flex} from '@assemble-inc/core';

export default {
  title: 'Input/TimeRange',
  component: TimeRange,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => (
  <Flex>
    <TimeRange {...args} />
  </Flex>
)

//👇 Each story then reuses that template
export const Primary = Template.bind({});


const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

Primary.args = {
  timeStartId: 'time-range-start',
  timeStartLabel: 'Start time',
  timeStartName: 'time-range-start-name',
  timeEndId: 'time-range-end',
  timeEndLabel: 'End time',
  timeEndName: 'time-range-end-name',
  initialTimeStart: new Date(),
  initialTimeEnd: tomorrow,
  required: true,
  onChange: (range) => console.log("start", range[0], "end", range[1])
}
