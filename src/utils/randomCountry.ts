const countries = [
  'Spain',
  'Bulgaria',
  'Ukraine',
  'Poland',
  'Italy',
  'USA',
  'Great Britain',
  'Romania',
  'Estonia',
  'Latvia'
] as const

function randomCountry() {
  return countries[Math.floor(Math.random() * countries.length)]
}

export { randomCountry }
