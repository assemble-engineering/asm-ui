import { RadioButtonGroup } from '@assemble-inc/core';

export default {
  title: 'Input/RadioButtonGroup',
  component: RadioButtonGroup,
};

//👇 We create a “template” of how args map to rendering
const Template = (args: React.ComponentProps<typeof RadioButtonGroup>) => <RadioButtonGroup {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
  id: "asm-radio-button-group",
  options: [
    {
      id: "one",
      value: "One",
      label: "One",
    },
    {
      id: "two",
      value: "Two",
      label: "Two",
    },
    {
      id: "three",
      value: "Three",
      label: "Three",
    }
  ],
  required: false,
  legend: "My radio button group legend",
  selectedRadio: "One",
  className: "",
  style: {
    display: 'flex',
  },
  radioButtonStyle: {
    display: 'flex',
    flexDirection: "row-reverse",
    justifyContent: "flex-end"
  }
};
