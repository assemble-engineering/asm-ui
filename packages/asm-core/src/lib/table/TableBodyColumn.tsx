export type ColumnProps = {
  children?: React.ReactNode;
  value?: React.ReactNode;
}

export const TableBodyColumn = ({children, value}: ColumnProps) => {
  return (
    <td tabIndex={0}>
      {children || value}
    </td>
  )
}
