import { StarRating } from '@assemble-inc/core';

export default { title: 'StarRating', component: StarRating};

//👇 We create a “template” of how args map to rendering
const Template = (args: React.ComponentProps<typeof StarRating>) => <StarRating {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
  className: 'asm-star-rating',
  strokeWidth: 5,
  strokeColor: '#c08140',
  fillColor: '#dfa64b',
  starCount: 5,
  starSiz: 30,
  gap: 5,
  filledStarCount: 0
};
