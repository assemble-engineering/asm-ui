import React from "react";
import { Table } from "@assemble-inc/core";
const {tableColumns, tableData} = {
    tableColumns:
    [
        {
          title: 'First Column',
          value: item => item.first,
          sortProperty: 'first',
          placeholder: 'N/A'
        },
        {
          title: 'Second Column',
          value: item => item.second,
          sortProperty: 'second',
          placeholder: 'N/A'
        },
        {
          title: 'Third Column',
          value: item => item.third,
          placeholder: 'N/A'
        },
    ],
    tableData:
    [
        {
          first: "first one",
          second: "second one",
          third: "third one"
        },
        {
          first: "first two",
          second: "second two",
          third: "third two"
        },
        {
          first: "first three",
          second: "second three",
          third: "third three"
        },
        {
          first: "first four",
          second: "second four",
          third: "third four"
        },
    ]
}

export default {
  title: 'Table',
  component: Table,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Table {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
   data: tableData,
   columns: tableColumns,
   style: {width: "100%"}
};
