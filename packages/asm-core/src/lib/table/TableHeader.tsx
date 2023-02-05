import {useState} from 'react'
import {TableRow} from './TableRow';
import {TableHeaderColumn} from './TableHeaderColumn';

export type TableHeaderProps = {
  children?: React.ReactNode;
  toggleSort?: (p: string) => void;
  columns?: {
    title: string;
    sortProperty: string;
  }[];
}

export const TableHeader = ({children, toggleSort, columns}: TableHeaderProps) => {
    const [hovering, setHovering] = useState(false);
    const createTableHeader = () => {
      if (columns) {
        return columns.map((column: any, i: number) => {
            return (
                <TableHeaderColumn
                  key={`${i}-${column.title}`}
                  value={column.title}
                  toggleSort={column.sortProperty && toggleSort ? () => toggleSort(column.sortProperty) : null}
                />
            )
        })
      }
    }
    return (
      <thead
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        tabIndex={0}
        style={{cursor: hovering && toggleSort ? "pointer" : "none"}}
      >
        <TableRow>
          {children ? children : createTableHeader()}
        </TableRow>
      </thead>
    )
}
