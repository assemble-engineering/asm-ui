import {useState} from 'react';
import {Text, Input} from '@assemble-inc/core';
import {postalCodeRegEx} from "@assemble-inc/util"


export default {
  title: 'util/Postal Code Regex',
};

const Template = () => {
  const [postalCode, setPostalCode] = useState('');
  return <>
    <Input id="input" onChange={e => setPostalCode(e.target.value)} value={postalCode} label="Enter postal code" />
    <Text>
      Is valid? {postalCodeRegEx(postalCode) ? 'Yes' : 'No'}
    </Text>
  </>
}

//👇 Each story then reuses that template
export const Primary = Template.bind({});
