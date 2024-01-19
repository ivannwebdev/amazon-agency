import { useState, useMemo } from 'react'

function useSort<T>(items: T[] | undefined, sortFunction: (a: T, b: T) => 1 | -1 | 0) {
  const [isSorted, setIsSorted] = useState<boolean>(false)

  if (!items) throw new Error('Refresh page please!')

  const sortedItems = useMemo(
    () => {
      if (isSorted) return [...items].sort((a, b) => sortFunction(a, b))

      return items
    },
    [isSorted, items, sortFunction]
  )

  return {
    isSorted,
    setIsSorted,
    sortedItems
  }
}

export { useSort }
