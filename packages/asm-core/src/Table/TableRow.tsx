type TableRowProps = {
  children?: React.ReactNode;
}

const TableRow = ({children}: TableRowProps) => {
    return (
        <tr tabIndex={0}>
            {children}
        </tr>
    )
}

export default TableRow
