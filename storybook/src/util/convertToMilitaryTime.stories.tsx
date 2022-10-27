import React, {useState} from 'react';
import {Text, Input} from '@assemble-inc/core';
import {convertToMilitaryTime} from "@assemble-inc/util"


export default {
  title: 'util/To military time',
};

const Template = (args) => {
  const [time, setTime] = useState('');
  return <>
    <Input id="input" onChange={e => setTime(e.target.value)} value={time} labelText="Enter regular time (e.g. 4:00 pm)" />
    <Text>
      Military Time: {convertToMilitaryTime(time)}
    </Text>
  </>
}

//👇 Each story then reuses that template
export const Primary = Template.bind({});
