import React, { ReactChild } from 'react';

type TableRowProps = {
  children?: ReactChild | ReactChild[]
}

const TableRow = ({children}: TableRowProps) => {
    return (
        <tr tabIndex={0}>
            {children}
        </tr>
    )
}

export default TableRow
