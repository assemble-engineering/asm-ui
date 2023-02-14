import {TableRow} from './TableRow';
import {TableBodyColumn} from './TableBodyColumn';
import { ReactNode } from 'react';

export type Item = {
  name: string;
  value: ReactNode;
}

export type TableFooterProps = {
  columns?: Item[];
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const TableFooter = ({columns, children, className='asm-table-footer', style}: TableFooterProps) =>{
  const createTableFooter = () => {
    return columns?.map((item: Item, index: number) => {
      return (
        <TableBodyColumn
          key={`foot-${index}-${item.name}`}
          value={item.value}
        />
      )
    })
  }

  return (
    <tfoot style={style} className={className} tabIndex={0}>
      <TableRow>
        {children || createTableFooter()}
      </TableRow>
    </tfoot>
  )
}
