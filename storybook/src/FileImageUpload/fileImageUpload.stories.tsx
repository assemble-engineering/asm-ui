import React from 'react';
import {ImageUpload} from '@assemble-inc/core';

export default {
  title: 'input/ImageUpload',
  component: ImageUpload,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <ImageUpload {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
  //  onSuccess: file => console.log("success", file)
  formPost: '/test',
  // resetIcon: 'x'
};
