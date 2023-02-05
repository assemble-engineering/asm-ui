export type TableRowProps = {
  children?: React.ReactNode;
}

export const TableRow = ({children}: TableRowProps) => {
  return (
    <tr tabIndex={0}>
      {children}
    </tr>
  )
}
