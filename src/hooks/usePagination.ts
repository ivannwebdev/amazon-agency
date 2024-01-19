import { useState } from 'react'
import { arrayOfNumber } from '../utils/arrayOfNumber'

function usePagination<T>(items: T[] | undefined, limit: number = 5) {
  const [currentPage, currentPageSetter] = useState<number>(1)

  if (!items) throw Error('Refresh page please!')

  const pagesCount = Math.ceil(items.length / limit)
  const pages = arrayOfNumber(pagesCount)
  const portionStart = limit * (currentPage - 1)
  const portionEnd = portionStart + limit
  const paginatedData = items.slice(portionStart, portionEnd)

  function setCurrentPage(page: number): void {
    const isPageInvalid: boolean = page < 1 || page > pagesCount

    currentPageSetter(p => isPageInvalid ? p : page)
  }

  return {
    currentPage,
    setCurrentPage,
    pages,
    paginatedData
  }
}

export { usePagination }
