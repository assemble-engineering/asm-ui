import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableFooter from './TableFooter';

export type Column = {
  title: string;
  value: string;
  sortProperty: string;
  placeholder: string;
  footer?: string;
}

export type Data = {
  [key: string]: string;
}

type TableProps = {
  children?: React.ReactNode;
  className?: string;
}

export const Table = (
  {
    className = 'asm-table',
    children
  }
: TableProps) => {
    return (
      <table className={className} tabIndex={0}>
        {children}
      </table>
    )
}

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Footer = TableFooter;
export default Table;
