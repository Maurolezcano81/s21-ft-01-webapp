import { useQuery } from '@tanstack/react-query'
import { getAuthStatus } from '../service/Auth'

export const useAuth = () => {
  return useQuery({
    queryKey: ['auth'],
    queryFn: getAuthStatus,
  })
}
