import {Divider, Text} from '@assemble-inc/core';

export default {
  title: 'Divider',
  component: Divider,
};

//👇 We create a “template” of how args map to rendering
const Template = (args: React.ComponentProps<typeof Divider>) => <div style={{display: args.vertical ? 'flex' : 'block'}}>
  <Text>Text above divider</Text>
  <Divider {...args} style={{marginLeft: 0, marginRight: 0}} />
  <Text>Text below divider</Text>
</div>;

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  vertical: false,
  className:'',
};
