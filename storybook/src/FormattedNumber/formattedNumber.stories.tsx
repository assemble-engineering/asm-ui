import {FormattedNumberInput} from '@assemble-inc/core';

export default {
  title: 'Input/FormattedNumberInput',
  component: FormattedNumberInput,
};

//👇 We create a “template” of how args map to rendering
const Template = (args: React.ComponentProps<typeof FormattedNumberInput>) => <FormattedNumberInput {...args} />

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
  initialValue: '',
  name: "formatted-number",
  max: 6969,
  allowEmpty: 0,
  setFieldValue: (_name: string, _value: number) => 0,
  required: false,
  label: "formatted number label",
  className: "",
  errors: {
    "formatted-number": null
  }
};
