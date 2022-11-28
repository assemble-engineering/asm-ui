import {PhoneNumberInput} from '@assemble-inc/core';

export default {
  title: 'Input/PhoneNumberInput',
  component: PhoneNumberInput,
};

//👇 We create a “template” of how args map to rendering
const Template = (args: React.ComponentProps<typeof PhoneNumberInput>) => <PhoneNumberInput {...args} />

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
  id: 'asm-phone-input',
  label: 'Enter Phone Number',
  className: '',
  required: true,
  error: "",
  errorClassName: "asm-phone-error",
  value: "",
};
