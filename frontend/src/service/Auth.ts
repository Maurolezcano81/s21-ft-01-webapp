import { fetcher } from '../utils/fetcher'

export const getAuthStatus = () =>
  fetcher<{ isAuthenticated: boolean }>('/auth')
