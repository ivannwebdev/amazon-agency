const emails = [
  'alinaivanchik@gmail.com',
  'johnblack@gmail.com',
  'viniamin2001@gmail.com',
  'dorianscorsese@gmail.com',
  'viktorzhirov223@gmail.com',
  'ashleyanderson12@gmail.com',
  'seedneywatson1485@gmail.com',
  'djinnylee2711@gmail.com',
  'joewhite3337@gmail.com',
  'juliaroberts556@gmail.com'
] as const

function randomEmail(index: number) {
  return emails[index]
}

export { randomEmail }
