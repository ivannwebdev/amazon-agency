import { FC, ReactElement } from 'react'
import { accounts } from '../api/accounts'
import { useParams } from 'react-router-dom'
import { ProfileRow } from '../components/ProfileRow'
import { Table } from '../components/Table'
import { useFilter } from '../hooks/useFilter'
import { Pagination } from '../components/Pagination'
import { usePagination } from '../hooks/usePagination'
import { Chekbox } from '../components/Checkbox'
import { useSort } from '../hooks/useSort'

const ProfilesTable: FC = (): ReactElement => {
  const { accountId } = useParams()
  const profiles = accounts.find((acc) => accountId === acc.accountId)?.profiles
  const { pages, paginatedData, setCurrentPage, currentPage } = usePagination(profiles)
    const { sortedItems, setIsSorted, isSorted } = useSort(
    paginatedData,
    (a, b) => +a.profileId > +b.profileId? -1 : +a.profileId < +b.profileId ? 1 : 0
  )

  const { value, onChange, filtredItems } = useFilter(
    sortedItems,
    (profile, filter) => profile.country.toLowerCase().includes(filter)
  )

  return (
    <>
      <Table content={'profiles'}>
        {
          filtredItems.map(({ profileId, country, marketplace }) => (
            <ProfileRow
              key={profileId}
              profileId={profileId}
              country={country}
              marketplace={marketplace}
            />
          ))
        }
      </Table>

      <Chekbox onChange={() => setIsSorted(!isSorted)} checked={isSorted}/>

      <input
        placeholder='Enter country...'
        type='search'
        onChange={onChange}
        value={value}
      />

      <Pagination
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        pages={pages}
      />
    </>
  )
}

export { ProfilesTable }
