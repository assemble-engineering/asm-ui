import { Icon } from '@assemble-inc/core';

export default {
  title: 'Icon',
  component: Icon,
};

//👇 We create a “template” of how args map to rendering
const Template = (args: React.ComponentProps<typeof Icon>) => <Icon {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
  className: "",
  color: "blue",
  name: "My-icon",
  size: 'small',
};
