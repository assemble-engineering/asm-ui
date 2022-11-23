import {Button} from '@assemble-inc/core';

export default { title: 'Button', component: Button};

//👇 We create a “template” of how args map to rendering
const Template = (args: React.ComponentProps<typeof Button>) => <Button {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.argTypes= {
  type: { options: ['button', 'submit'], control: 'radio' },
  element: {
    options: ['button', 'a'],
    control: 'radio',
  }
};

Primary.args = {
  children: 'Click Me',
  tabIndex: 0,
  type: 'button',
  hidden: false,
  ariaLabel: '',
  download: false,
  id: '',
  element: 'button',
  href: '#',
  onClick: () => {console.log('click')},
  disabled: false,
  target:'_blank',
  className: 'asm-button'
};
