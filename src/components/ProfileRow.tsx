import { FC, ReactElement } from 'react'
import { Profile } from '../models'
import { useNavigate, useParams } from 'react-router-dom'

type Props = Omit<Profile, 'campaigns'>

const ProfileRow: FC<Props> = ({ profileId, country, marketplace }): ReactElement => {
  const navigate = useNavigate()
  const { accountId } = useParams()

  return (
    <tr onClick={() => navigate(`/profiles/${accountId}/campaigns/${profileId}`)}>
      <td>{profileId}</td>
      <td>{country}</td>
      <td>{marketplace}</td>
    </tr>
  )
}

export { ProfileRow }
