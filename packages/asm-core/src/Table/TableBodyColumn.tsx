export type ColumnProps = {
  children?: React.ReactNode;
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
