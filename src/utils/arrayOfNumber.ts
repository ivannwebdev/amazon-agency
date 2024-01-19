function arrayOfNumber(n: number): number[] {
  if (isNaN(n)) return []

  return (
    [...Array(n).keys()]
      .map(el => ++el)
  )
}

export { arrayOfNumber }
