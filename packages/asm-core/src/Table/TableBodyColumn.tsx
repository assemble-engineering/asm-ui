export type ColumnProps = {
  children?: React.ReactNode | React.ReactChildren;
  value?: string | number;
}

const TableBodyColumn = ({children, value}: ColumnProps) => {
    return (
        <td tabIndex={0}>
            {children || value}
        </td>
    )
}

export default TableBodyColumn
