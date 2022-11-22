import TableRow from './TableRow';
import TableBodyColumn from './TableBodyColumn';
import {Column} from "."

type TableFooterProps = {
  columns?: Column[];
  children?: React.ReactNode;
}

const TableFooter = ({columns, children}: TableFooterProps) =>{

    const createTableFooter = () => {
        return columns?.map((item, index: number) => {
            return (
                <TableBodyColumn
                    key={`foot-${index}`}
                    value={item.footer}
                />
            )
        })
    }

    return (
        <tfoot tabIndex={0}>
            <TableRow>
                {children || createTableFooter()}
            </TableRow>
        </tfoot>
    )
}

export default TableFooter
