import React, {useState} from 'react';
import {Text, Label} from '@assemble-inc/core';
import {convertToMilitaryTime} from "@assemble-inc/util"
import DateTimePicker from 'react-datetime-picker';

export default {
  title: 'util/To military time',
};

const Template = (args) => {
  const [date, onChange] = useState(new Date());
  return (
    <>
    <Label>
      Pick your date/time:
    </Label>
    <DateTimePicker onChange={onChange} value={date} />
    <Text>
      Military Time: {convertToMilitaryTime(date)}
    </Text>
  </>
  )
}

//👇 Each story then reuses that template
export const Primary = Template.bind({});
