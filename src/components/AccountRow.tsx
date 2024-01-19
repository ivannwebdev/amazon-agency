import { FC, ReactElement } from 'react'
import { Account } from '../models'
import { useNavigate } from 'react-router-dom'

type Props = Omit<Account, 'profiles'>

const AccountRow: FC<Props> = ({ email, accountId, authToken, creationDate }): ReactElement => {
  const navigate = useNavigate()

  return (
    <tr onClick={() => navigate(`/profiles/${accountId}`)}>
      <td>{accountId}</td>
      <td>{email}</td>
      <td>{authToken}</td>
      <td>{creationDate}</td>
    </tr>
  )
}

export { AccountRow }
