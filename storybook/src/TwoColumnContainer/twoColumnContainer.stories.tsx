import {TwoColumnContainer} from '@assemble-inc/core';

export default {
  title: 'TwoColumnContainer',
  component: TwoColumnContainer,
};

//👇 We create a “template” of how args map to rendering
const Template = (args: React.ComponentProps<typeof TwoColumnContainer>) => <TwoColumnContainer {...args}>
  <p>Here is column 1</p>
  <p>Here is column 2</p>
</TwoColumnContainer>;

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.argTypes = {
  alignment: {
    options: [ "center", "end", "start"],
    control: 'radio'
  }
}
