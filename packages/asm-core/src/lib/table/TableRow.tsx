export type TableRowProps = {
  children?: React.ReactNode;
}

export const TableRow = ({children}: TableRowProps) => {
  return (
    <tr className='asm-table-row' tabIndex={0}>
      {children}
    </tr>
  )
}
