import { ReactNode } from "react"

export const Table = ({children, className='asm-table', style}: {children: ReactNode | ReactNode[], className?: string; style?: React.CSSProperties;}) => {
  return (
    <table className={className} style={style}>
      {children}
    </table>
  )
}
