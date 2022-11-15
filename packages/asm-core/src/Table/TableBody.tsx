import TableRow from './TableRow';
import TableBodyColumn from './TableBodyColumn';
import {Column, Data} from "."

type TableBodyProps = {
  children?: React.ReactNode;
  data: Data[];
  columns?: Column[];
}

const TableBody = ({children, data, columns}: TableBodyProps) => {
    const createTableBody = () => {
        return data.map((item: any, index: number) => {
            return (
                <TableRow key={`table-row-${index}`}>
                    {columns?.map((column: any, index: number) =>
                        <TableBodyColumn
                            key={`${index}-${item[column.property]}`}
                            // item={item}
                            value={column.value(item) === 0 ? 0 : column.value(item) || column.placeholder || ''}
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

export default TableBody
