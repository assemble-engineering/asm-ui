import React from 'react';
import {ThreeColumnContainer} from '@assemble-inc/core';

export default {
  title: 'ThreeColumnContainer',
  component: ThreeColumnContainer,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <ThreeColumnContainer {...args}>
  <p>Here is column 1</p>
  <p>Here is column 2</p>
  <p>Here is column 3</p>
</ThreeColumnContainer>;

//👇 Each story then reuses that template
export const Primary = Template.bind({});


Primary.argTypes = {
  alignment: {
    options: [ "center", "end", "start"],
    control: 'radio'
  }
}
