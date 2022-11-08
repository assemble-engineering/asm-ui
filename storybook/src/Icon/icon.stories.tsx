import React from 'react';
import { Icon } from '@assemble-inc/core';

export default {
  title: 'Icon',
  component: Icon,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Icon {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
  bordered: true,
  circular: true,
  className: "",
  color: "blue",
  loading: false,
  name: "My-icon",
  size: 'small',
};
