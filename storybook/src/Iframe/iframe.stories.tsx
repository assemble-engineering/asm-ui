import {Iframe} from '@assemble-inc/core';

export default {
  title: 'Iframe',
  component: Iframe,
};

//👇 We create a “template” of how args map to rendering
const Template = (args: React.ComponentProps<typeof Iframe>) => <Iframe {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
  allow:true,
  allowFullScreen:true,
  className:'asm-iframe',
  height:'100%',
  width:'100%',
  loading:'lazy',
  src:'',
  title:'Iframe Title',
};
