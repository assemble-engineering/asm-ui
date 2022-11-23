import {Image} from '@assemble-inc/core';

export default {
  title: 'Image',
  component: Image,
};

//👇 We create a “template” of how args map to rendering
const Template = (args: React.ComponentProps<typeof Image>) => <Image {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
   responsive: true,
   height: 200,
   width: 300,
   src: 'https://merriam-webster.com/assets/mw/images/gallery/gal-wap-slideshow-slide/bubkes-words-for-small-things-almond-on-plate-photo-6277-be49ef799f7b09e44c72201dec3cf100@2x.jpg',
   alt: 'Fork and knife'
};
