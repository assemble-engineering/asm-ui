import React from 'react';
import { Flex } from '@assemble-inc/core';

export default {
  title: 'Flex',
  component: Flex,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => {
  return (
    <Flex {...args.row}>
      <Flex.Column {...args.column}>
        <div style={{width: '100px', height: '100px', background: 'red'}} />
      </Flex.Column>
      <Flex.Column {...args.column}>
        <div style={{width: '100px', height: '100px', background: 'yellow'}} />
      </Flex.Column>
      <Flex.Column {...args.column}>
        <div style={{width: '100px', height: '100px', background: 'green'}} />
      </Flex.Column>
    </Flex>
  );
};

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
  row: {
    addedStyle: null,
    wrap: false,
    direction: 'row',
    reversed: null,
    alignment: null,
    justify: null,
    className: null,
  },
  column: {
  grow: 1,
  shrink: 1,
  basis: 'auto',
  alignSelf: 'auto',
  style: null
  }
};
