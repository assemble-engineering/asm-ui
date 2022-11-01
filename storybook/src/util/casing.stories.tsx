import React, {useState} from 'react';
import {Text, Input} from '@assemble-inc/core';
import {casing} from "@assemble-inc/util"


export default {
  title: 'util/Casing',
};

const Template = (args) => {
  const [str, setStr] = useState('');
  return <>
    <Input id="input" onChange={e => setStr(e.target.value)} value={str} labelText="Enter string" />
    {
      Object.keys(casing).map(fn =>
        <Text>
          {fn}: {casing[fn](str)}
        </Text>
      )
    }
  </>
}

//👇 Each story then reuses that template
export const Primary = Template.bind({});
