import { ColumnProps } from './TableBodyColumn';

export type ToggleSort = {
  toggleSort: (() => void) | null;
}

export const TableHeaderColumn = ({children, value, toggleSort}: ColumnProps & ToggleSort) => {
  return (
    <th className='asm-table-header-column' onClick={toggleSort || undefined} tabIndex={0}>
      {children || value}
    </th>
  )
}
