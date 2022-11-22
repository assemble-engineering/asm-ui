import React, {useState} from 'react';
import {Text, Input} from '@assemble-inc/core';
import {phoneNumberRegEx} from "@assemble-inc/util"


export default {
  title: 'util/Phone Number Regex',
};

const Template = (args) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  return <>
    <Input id="input" onChange={e => setPhoneNumber(e.target.value)} value={phoneNumber} label="Enter phone number" />
    <Text>
      Is valid? {phoneNumberRegEx(phoneNumber) ? 'Yes' : 'No'}
    </Text>
  </>
}

//👇 Each story then reuses that template
export const Primary = Template.bind({});
