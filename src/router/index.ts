import { AccountsTable } from '../pages/AccountsTable'
import { CampaignsTable } from '../pages/CampaignsTable'
import { ProfilesTable } from '../pages/ProfilesTable'

export enum RouteNames {
  ACCOUNTS = '/',
  PROFILES = '/profiles/:accountId',
  CAMPAIGNS = '/profiles/:accountId/campaigns/:profileId'
}

export interface AppRoute {
  path: string
  element: React.ComponentType
  index: boolean
}

export const AppRoutes: AppRoute[] = [
  { path: RouteNames.ACCOUNTS, index: true, element: AccountsTable },
  { path: RouteNames.PROFILES, index: false, element: ProfilesTable },
  { path: RouteNames.CAMPAIGNS, index: false, element: CampaignsTable }
]
