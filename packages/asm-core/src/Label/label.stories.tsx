import {Label} from './index';

export default {
  title: 'Label',
  component: Label,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Label {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
  htmlFor:'1',
  children:'Example Label Text',
  className:'',
};
