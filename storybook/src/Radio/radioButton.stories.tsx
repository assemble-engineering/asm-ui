import React from 'react';
import { RadioButton } from '@assemble-inc/core';

export default {
  title: 'RadioButton',
  component: RadioButton,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <RadioButton {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
  id: "asm-radio-button",
  value: "My Radio Button",
  checked: false,
  required: false,
  labelText: "My Label Text",
  className: "",
};
