import { FC, ReactElement } from 'react'
import { Table } from '../components/Table'
import { accounts } from '../api/accounts'
import { useParams } from 'react-router-dom'
import { CampaignRow } from '../components/CampaignRow'
import { useFilter } from '../hooks/useFilter'
import { Pagination } from '../components/Pagination'
import { usePagination } from '../hooks/usePagination'
import { useSort } from '../hooks/useSort'
import { Chekbox } from '../components/Checkbox'

const CampaignsTable: FC = (): ReactElement => {
  const { accountId, profileId } = useParams()
  const campaigns = accounts
    .find((acc) => acc.accountId === accountId)
    ?.profiles.find((profile) => profile.profileId === profileId)?.campaigns

  const { paginatedData, pages, setCurrentPage, currentPage } = usePagination(campaigns)
  const { sortedItems, setIsSorted, isSorted } = useSort(
    paginatedData,
    (a, b) => +a.campaignId > +b.campaignId ? -1 : +a.campaignId < +b.campaignId ? 1 : 0
  )

  const { filtredItems, value, onChange } = useFilter(
    sortedItems,
    (campaign, filter) => campaign.cost.toLowerCase().includes(filter)
  )

  return (
    <>
      <Table content={'campaigns'}>
        {
          filtredItems.map((camp) => (
            <CampaignRow key={camp.campaignId} {...camp} />
          ))
        }
      </Table>

      <Chekbox onChange={() => setIsSorted(!isSorted)} checked={isSorted}/>

      <input
        placeholder='Enter cost...'
        type='search'
        onChange={onChange}
        value={value}
      />

      <Pagination
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  )
}

export { CampaignsTable }
