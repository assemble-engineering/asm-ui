import {IconLabelPair} from '@assemble-inc/core';

export default {
  title: 'IconLabelPair',
  component: IconLabelPair,
};

//👇 We create a “template” of how args map to rendering
const Template = (args: React.ComponentProps<typeof IconLabelPair>) => <IconLabelPair {...args} />

//👇 Each story then reuses that template
export const Primary = Template.bind({});


Primary.args = {
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Approve_icon.svg/2048px-Approve_icon.svg.png",
  alt: "icon",
  icon: "close",
  iconSize: "large",
  textColor: "#000",
  label: "My label text",
  header: "My label header",
  headerElement: "h3"
};
