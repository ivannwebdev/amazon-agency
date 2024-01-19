import { FC, ReactElement } from 'react'
import { Arrow } from './Arrow'
import '../styles/pagination.css'

type Props = {
  pages: number[]
  currentPage: number
  setCurrentPage: (page: number) => void
}

const Pagination: FC<Props> = ({ pages, setCurrentPage, currentPage }): ReactElement => {
  return (
    <div className='pages'>
      <Arrow
        direction={ 'left' }
        onClick={ () => setCurrentPage(currentPage - 1) }
      />

      {
        pages.map((page) => (
          <div
            className='page'
            style={{ backgroundColor: page === currentPage ? 'lightgrey' : '' }}
            key={page}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </div>
        ))
      }

      <Arrow
        direction={'right'}
        onClick={() => setCurrentPage(currentPage + 1)}
      />
    </div>
  )
}

export { Pagination }
