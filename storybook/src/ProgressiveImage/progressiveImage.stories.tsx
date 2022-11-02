import React from 'react';
import {ProgressiveImage} from '@assemble-inc/core';

export default {
  title: 'ProgressiveImage',
  component: ProgressiveImage,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <ProgressiveImage {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
  src: 'cat.jpeg',
  placeholder: 'cat_ph.jpeg',
  width: 500,
  height: 200,
  responsive: false
};
