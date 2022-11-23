import { RadioButton } from '@assemble-inc/core';

export default {
  title: 'Input/RadioButton',
  component: RadioButton,
};

//👇 We create a “template” of how args map to rendering
const Template = (args: React.ComponentProps<typeof RadioButton>) => <RadioButton {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
  id: "asm-radio-button",
  value: "My Radio Button",
  checked: false,
  onChange: (e: React.ChangeEvent) => console.log("change", e),
  required: false,
  label: "My Label Text",
  className: "",
  style: {
    display: "flex",
    flexDirection: 'row-reverse',
    justifyContent: "flex-end"
  }
};
