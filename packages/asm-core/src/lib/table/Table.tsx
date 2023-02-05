import { ReactNode } from "react"

export const Table = ({children}: {children: ReactNode | ReactNode[]}) => {
  return (
    <table>
      {children}
    </table>
  )
}
