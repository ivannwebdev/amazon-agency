import { FC, ReactElement, ReactNode } from 'react'
import '../styles/table.css'

type PropsWithChildren<P = unknown> = P & { children: ReactNode }

type Props = {
  content: 'accounts' | 'profiles' | 'campaigns'
}

const Table: FC<PropsWithChildren<Props>> = ({ children, content }): ReactElement => {
  return (
    <table className='table-striped'>
      <caption>{content}</caption>
      <thead>
        <tr className='head-row'>
          <th>Id</th>
          {
            content === 'accounts' ? (
              <>
                <th>Email</th>
                <th>Auth token</th>
                <th>Creation date</th>
              </>
            ) : content === 'profiles' ? (
              <>
                <th>Country</th>
                <th>Marketplace</th>
              </>
            ) : (
              <>
                <th>Clicks</th>
                <th>Cost</th>
                <th>Date</th>
              </>
            )
          }
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  )
}

export { Table }
