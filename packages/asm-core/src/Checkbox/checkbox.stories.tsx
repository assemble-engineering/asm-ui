import {Checkbox} from './index';

export default {
  title: 'Checkbox',
  component: Checkbox,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Checkbox {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
  disabled:false,
  tabIndex:0,
  checked:false,
  id:'1',
  labelText:'Label',
  value:'',
  onChange:{},
  className:'asm-checkbox',
  labelClassName:'asm-checkbox-label',
};
