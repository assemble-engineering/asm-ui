import React, { ReactChild } from 'react';

export type ColumnProps = {
  children?: ReactChild | ReactChild[];
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
