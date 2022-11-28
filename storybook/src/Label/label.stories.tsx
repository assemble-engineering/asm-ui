import {Label} from '@assemble-inc/core';

export default {
  title: 'Input/Label',
  component: Label,
};

//👇 We create a “template” of how args map to rendering
const Template = (args: React.ComponentProps<typeof Label>) => <Label {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
  htmlFor:'1',
  children:'Example Label Text',
  className:'',
};
