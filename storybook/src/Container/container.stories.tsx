import React from 'react';
import {Container, Text} from '@assemble-inc/core';

export default {
  title: 'Container',
  component: Container,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Container {...args}>
    <Text>
      This is my container text
    </Text>
  </Container>;

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
  text: true,
  basic: true,
  className: '',
  style: {
    border: "1px solid red"
  }
};
