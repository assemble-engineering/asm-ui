import { TableRow } from './TableRow';
import { TableBodyColumn } from './TableBodyColumn';
import { ReactNode } from 'react';

export type Item = {
  name: string;
  value: ReactNode;
  placeholder?: string;
}

export type Row = Item[];

export type TableBodyProps = {
  children?: React.ReactNode;
  data: Row[];
}

export const TableBody = ({children, data}: TableBodyProps) => {
  const createTableBody = () => {
    return data.map((rowData: Row, index: number) => {
      return (
        <TableRow key={`table-row-${index}`}>
          {rowData.map((column: Item, index: number) =>
            <TableBodyColumn
              key={`${index}-${column.name}`}
              value={column.value}
            />
          )}
        </TableRow>
      )
    })
  }

  return (
    <tbody tabIndex={0}>
      {children || createTableBody()}
    </tbody>
  )
}
