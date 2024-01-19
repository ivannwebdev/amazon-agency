import { FC, ReactElement } from 'react'
import { accounts } from '../api/accounts'
import { AccountRow } from '../components/AccountRow'
import { Table } from '../components/Table'
import { useFilter } from '../hooks/useFilter'
import { usePagination } from '../hooks/usePagination'
import { Pagination } from '../components/Pagination'
import { useSort } from '../hooks/useSort'
import { Chekbox } from '../components/Checkbox'

const AccountsTable: FC = (): ReactElement => {
  const { paginatedData, pages, currentPage, setCurrentPage } = usePagination(accounts)
  const { sortedItems, setIsSorted, isSorted } = useSort(
    paginatedData,
    (a, b) => +a.accountId > +b.accountId ? -1 : +a.accountId < +b.accountId ? 1 : 0
  )
  const { value, onChange, filtredItems } = useFilter(
    sortedItems,
    (account, filter) => account.email.toLowerCase().includes(filter)
  )

  return (
    <>
      <Table content={'accounts'}>
        {
          filtredItems.map(({ accountId, authToken, creationDate, email }) => (
            <AccountRow
              key={accountId}
              accountId={accountId}
              authToken={authToken}
              creationDate={creationDate}
              email={email}
            />
          ))
        }
      </Table>

      <Chekbox checked={isSorted} onChange={() => setIsSorted(!isSorted)}/>

      <input
        placeholder='Enter email...'
        value={value}
        onChange={onChange}
        type='search'
      />

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pages={pages}
      />
    </>
  )
}

export { AccountsTable }
