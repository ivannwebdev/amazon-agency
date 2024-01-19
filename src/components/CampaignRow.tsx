import { FC, ReactElement } from 'react'
import { Campaign } from '../models'

const CampaignRow: FC<Campaign> = ({ campaignId, cost, clicks, date }): ReactElement => {
  return (
    <tr>
      <td>{campaignId}</td>
      <td>{clicks}</td>
      <td>{cost}</td>
      <td>{date}</td>
    </tr>
  )
}

export { CampaignRow }
