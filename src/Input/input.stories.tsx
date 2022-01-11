import {Input} from './index';

export default {
  title: 'Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

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
  onChange:(e) => {console.log(e.target.value)},
  onClick: () => {return},
  value: '',
  labelText: 'Sample Input',
  errorText: '',
  errorClassName: '',
};
