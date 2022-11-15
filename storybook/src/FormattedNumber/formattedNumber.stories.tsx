import React from 'react';
import {FormattedNumberInput} from '@assemble-inc/core';

export default {
  title: 'Input/FormattedNumberInput',
  component: FormattedNumberInput,
};

//👇 We create a “template” of how args map to rendering
const Template = (args: any) => <FormattedNumberInput {...args} />

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
  initialValue: '',
  name: "formatted-number",
  max: 6969,
  allowEmpty: 0,
  setFieldValue: (name: string, value: number) => 0,
  required: false,
  label: "formatted number label",
  className: "",
  errors: {
    "formatted-number": null
  }
};
