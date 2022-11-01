import React from 'react'
import {Spinner} from '@assemble-inc/core';

export default { title: 'Spinner', component: Spinner};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Spinner {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
  width: 50,
  thickness: 4,
  color: "#000",
  className: 'asm-spinner'
};
