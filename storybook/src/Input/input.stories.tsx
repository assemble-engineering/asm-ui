import {Input} from '@assemble-inc/core';

export default {
  title: 'Input/Input',
  component: Input,
};

const Template = (args: React.ComponentProps<typeof Input>) => <Input {...args} />;

export const Primary = Template.bind({});

Primary.argTypes = {
  type: {
    options: ['text', 'url', 'time', 'tel', 'search', 'range', 'password', 'number', 'email', 'month', 'week','date', 'datetime-local', 'color' ],
    control: 'select'
  },
}

Primary.args = {
  placeholder:'Enter text now',
  id:'1',
  type: 'text',
  className:'',
  disabled:false,
  onChange:(e: React.ChangeEvent<HTMLInputElement>) => {console.log(e.target.value)},
  onClick: () => {return},
  value: '',
  label: 'Sample Input',
  error: '',
  errorClassName: '',
};
