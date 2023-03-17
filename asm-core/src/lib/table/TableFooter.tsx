import {TableRow} from './TableRow';
import {TableBodyColumn} from './TableBodyColumn';
import { ReactNode } from 'react';
import classNames from 'classnames';

export type Item = {
  name: string;
  value: ReactNode;
}

export type TableFooterProps = {
  columns?: Item[];
  children?: React.ReactNode;
  className?: string;
  appendClassName?: string;
  style?: React.CSSProperties;
}

export const TableFooter = ({columns, children, className='asm-table-footer', appendClassName, style}: TableFooterProps) =>{
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
    <tfoot style={style} className={classNames(className, appendClassName)} tabIndex={0}>
      <TableRow>
        {children || createTableFooter()}
      </TableRow>
    </tfoot>
  )
}
