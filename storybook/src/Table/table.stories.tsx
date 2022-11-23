import {useState} from "react";
import { Table } from "@assemble-inc/core";
const {tableColumns, tableData} = {
    tableColumns:
    [
        {
          title: 'First Column',
          value: (item: any) => item.first,
          sortProperty: 'first',
          placeholder: 'N/A',
          footer: "1st footer"
        },
        {
          title: 'Second Column',
          value: (item: any) => item.second,
          sortProperty: 'second',
          placeholder: 'N/A',
          footer: "2nd footer"
        },
        {
          title: 'Third Column',
          value: (item: any) => item.third,
          sortProperty: 'third',
          placeholder: 'N/A',

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
const Template = (args: React.ComponentProps<typeof Table> & React.ComponentProps<typeof Table.Body>) => {
  const [sortProperty, setSortProperty] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<Boolean | null>(null);

  const toggleSort = (property: string) => {
      if (!sortProperty || property !== sortProperty) {
        setSortProperty(property);
        setSortOrder(true);
      } else {
        setSortOrder(prev => !prev);
      }
  }

  const formatData = () => {
    if (sortProperty) {
      return args.data?.sort((a, b) => {
        const itemA = a[sortProperty] ? a[sortProperty].toLowerCase() : '';
        const itemB = b[sortProperty] ? b[sortProperty].toLowerCase() : '';
        if (itemA > itemB) {
          return sortOrder ? 1 : -1;
        } else if (itemB > itemA) {
          return sortOrder ? -1 : 1;
        } else {
          return 0
        }
      })
    } else {
      return args.data
    }
  }
  return (
    <Table>
      {args.columns && <Table.Header toggleSort={toggleSort} columns={args.columns} />}
      <Table.Body data={formatData()} columns={args.columns} />
      <Table.Footer columns={args.columns} />
    </Table>
  )
};

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
   data: tableData,
   columns: tableColumns,
   style: {width: "100%"}
};
