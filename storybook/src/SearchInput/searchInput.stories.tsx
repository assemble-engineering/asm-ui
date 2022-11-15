import React, {useState} from 'react';
import {Search} from '@assemble-inc/core';

export default {
  title: 'Input/Search',
  component: Search,
};

//👇 We create a “template” of how args map to rendering
const Template = (args: any) => {
const [value, setValue] = useState('')
return <Search
  {...args}
  value={value}
  onChange={e => setValue(e.target.value)}
  onClear={e => setValue('')}
/>

}

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
  onClick: (e) => console.log("e", e),
  onChange: (e) => console.log("e", e),
  onClear: (e) => console.log("e", e),
  label: "Search",
  labelClassName: "asm-search-label",
  loading: false,
  placeholder: "Search Placeholder",
  value: "",
  clearButtonVisible: true
};
