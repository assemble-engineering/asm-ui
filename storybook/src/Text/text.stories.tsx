import {Text} from '@assemble-inc/core';

export default {
  title: 'Text',
  component: Text,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Text {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.argTypes = {
  element: {
    options: ['p', 'span', 'code', 'pre'],
    control: 'radio'
  }
}
Primary.args = {
   children: 'Very natural sounding sample text sentence.',
   className: '',
   element: 'p'
};
