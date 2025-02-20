export const ROUTES = {
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  HOME: '/',
  NOTFOUND: '*',
} as const

export type TypeRoutes = keyof typeof ROUTES
