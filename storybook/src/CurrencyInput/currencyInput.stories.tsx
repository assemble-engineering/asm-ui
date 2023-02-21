import {CurrencyInput} from '@assemble-inc/core';

export default {
  title: 'Input/CurrencyInput',
  component: CurrencyInput,
};

//👇 We create a “template” of how args map to rendering
const Template = (args: React.ComponentProps<typeof CurrencyInput>) => <CurrencyInput {...args} />

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
  required: true,
  value: 1,
  label: "Currency input label",
  name: "currency",
  disabled: false,
  placeholder: "Enter currency value",
};
