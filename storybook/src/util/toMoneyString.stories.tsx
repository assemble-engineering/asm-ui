import React, {useState} from 'react';
import {Text, Input} from '@assemble-inc/core';
import {toMoneyString} from "@assemble-inc/util"


export default {
  title: 'util/To money string',
};

const Template = (args) => {
  const [moneyStr, setMoneyStr] = useState('');
  return <>
    <Input id="input" onChange={e => setMoneyStr(e.target.value)} value={moneyStr} labelText="Enter number string" />
    <Text>
      Dollars: {toMoneyString(moneyStr)}
    </Text>
  </>
}

//👇 Each story then reuses that template
export const Primary = Template.bind({});
