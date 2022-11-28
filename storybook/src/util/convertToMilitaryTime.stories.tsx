import {useState} from 'react';
import {Text, Label, DatePicker} from '@assemble-inc/core';
import {convertToMilitaryTime} from "@assemble-inc/util"

export default {
  title: 'util/To military time',
};

const Template = (args: {id: string}) => {
  const [date, onChange] = useState(new Date());
  return (
    <>
      <Label htmlFor={args.id}>
        Pick your date/time:
      </Label>
      <DatePicker initialValue={new Date()} id={args.id} name={args.id} onChange={onChange} showTimeSelect />
      <Text>
        Military Time: {convertToMilitaryTime(date)}
      </Text>
    </>
  )
}

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
  id: 'date-time-picker'
}
