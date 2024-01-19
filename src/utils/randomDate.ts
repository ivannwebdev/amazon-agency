function randomDate(): string {
  const start = new Date(2012, 0, 1)
  const end = new Date()
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
  const year = date.getFullYear()

  let month = '' + (date.getMonth() + 1)
  let day = '' + date.getDate()

  if (month.length < 2) month = '0' + month
  if (day.length < 2) day = '0' + day

  return [day, month, year].join('. ')
}

export { randomDate }
