import { ColumnProps } from './TableBodyColumn';

type ToggleSort = {
  toggleSort: (() => void) | null;
}

const TableHeaderColumn = ({children, value, toggleSort}: ColumnProps & ToggleSort) => {
    return (
        <th onClick={toggleSort || undefined} tabIndex={0}>
            {children || value}
        </th>
    )
}

export default TableHeaderColumn
