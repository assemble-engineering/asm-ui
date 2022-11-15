import React from 'react';
import {PhoneNumberInput} from '@assemble-inc/core';

export default {
  title: 'Input/PhoneNumberInput',
  component: PhoneNumberInput,
};

//👇 We create a “template” of how args map to rendering
const Template = (args: any) => <PhoneNumberInput {...args} />

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
  id: 'asm-phone-input',
  label: 'Enter Phone Number',
  className: '',
  required: true,
  error: {
    errorMessage: "My error message",
    errorClassName: "asm-phone-error"
  },
  value: "",
};
