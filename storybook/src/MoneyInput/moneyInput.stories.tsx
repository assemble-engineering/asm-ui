import {MoneyInput} from '@assemble-inc/core';

export default {
  title: 'Input/MoneyInput',
  component: MoneyInput,
};

//👇 We create a “template” of how args map to rendering
const Template = (args: React.ComponentProps<typeof MoneyInput>) => <MoneyInput {...args} />

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
  required: true,
  value: 1,
  label: "Money input label",
  name: "money",
  disabled: false,
  placeholder: "Enter money value",
};
