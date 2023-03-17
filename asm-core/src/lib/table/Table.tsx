import classNames from "classnames";
import { ReactNode } from "react"

type TableProps = {
  children: ReactNode | ReactNode[],
  className?: string;
  appendClassName?: string;
  style?: React.CSSProperties;
}

export const Table = ({children, className='asm-table', appendClassName, style}: TableProps) => {
  return (
    <table className={classNames(className, appendClassName)} style={style}>
      {children}
    </table>
  )
}
