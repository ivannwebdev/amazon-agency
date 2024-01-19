import { randomCountry } from '../utils/randomCountry'
import { randomDate } from '../utils/randomDate'
import { randomString } from '../utils/randomString'
import { randomEmail } from '../utils/randomEmail'
import { Account } from '../models'

export const accounts: Account[] = Array(10).fill('').map((_, i) => ({
  accountId: `${i + 1}`,
  email: randomEmail(i),
  authToken: randomString(8),
  creationDate: randomDate(),
  profiles: Array(10).fill('').map((_, i) => ({
    profileId: `${i + 1}`,
    country: randomCountry(),
    marketplace: `${randomString(6)}.com`,
    campaigns: Array(10).fill('').map((_, i) => ({
      campaignId: `${i + 1}`,
      clicks: Math.floor(Math.random() * 200),
      cost: `${Math.floor(Math.random() * 10000)} $`,
      date: randomDate()
    }))

  }))
}))
