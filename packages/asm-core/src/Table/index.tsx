import { useState } from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableFooter from './TableFooter';

export type Column = {
  title: string;
  value: string;
  sortProperty: string;
  placeholder: string;
}

export type Data = {
  [key: string]: string;
}

type TableProps = {
  data: Data[];
  columns: Column[];
  children?: React.ReactNode | React.ReactChildren;
  className?: string;
}

export const Table = ({data, columns, className = 'asm-table', children, ...rest}: TableProps) => {
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
          return data.sort((a, b) => {
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
          return data
        }
    }

    return (
      <table className={className} tabIndex={0} {...rest}>
          <TableHeader
              columns={columns}
              toggleSort={toggleSort}
          />
          <TableBody
              columns={columns}
              data={formatData()}
          />
          <TableFooter
              columns={columns}
          />
          {children}
      </table>
    )
}

export default Table;
