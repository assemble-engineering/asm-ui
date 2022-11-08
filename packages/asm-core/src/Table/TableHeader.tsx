import TableRow from './TableRow';
import TableHeaderColumn from './TableHeaderColumn';
import {Column} from "."

type TableHeaderProps = {
  children?: React.ReactNode | React.ReactChildren;
  toggleSort: (p: string) => void;
  columns: Column[];
}

const TableHeader = ({children, toggleSort, columns}: TableHeaderProps) => {
    const createTableHeader = () => {
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
    return (
        <thead tabIndex={0}>
            <TableRow>
                {children || createTableHeader()}
            </TableRow>
        </thead>
    )
}

export default TableHeader
