import {useState} from 'react';
import {Alert, Button} from '@assemble-inc/core';

export default {
  title: 'Alert',
  component: Alert,
};

//👇 We create a “template” of how args map to rendering
const Template = (args: React.ComponentProps<typeof Alert>) => {
  const [active, setActive] = useState(false)
  return (
    <div style={{position: "relative", minHeight: "50vh"}}>
      <Button onClick={() => setActive(prev => !prev)}>
        {active ? 'Close' : 'Open'} alert
      </Button>
        <Alert
        {...args}
        handleClose={() => setActive(false)}
        style={{
          ...args.style,
          visibility: active ? "visible" : "hidden"
        }}
        alert={{
          message: args.alert.message,
          type: args.alert.type,
          active
        }}/>
    </div>
  );
}

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.argTypes = {
  type: {
    options: ['warning', 'error', 'success', 'info'],
    control: 'radio'
  }
}

Primary.args = {
  text: true,
  basic: true,
  className: '',
  style: {
    bottom: 0,
    position: "absolute",
  },
  alert: {
    message: "My alert message",
    type: 'warning'
  }
};
