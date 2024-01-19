import { useState, ChangeEvent, useMemo } from 'react'

function useFilter<T>(items: T[] | undefined, filerFunction: (item: T, filtredValue: string) => boolean) {
  const [filter, setFilter] = useState<string>('')

  if (!items) throw new Error('Refresh page please!')

  const filtredItems = useMemo(
    () => items.filter(item => filerFunction(item, filter.toLowerCase())),
    [filter, items, filerFunction]
  )

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setFilter(e.target.value)
  }

  return {
    value: filter,
    onChange: handleChange,
    filtredItems
  }
}

export { useFilter }
