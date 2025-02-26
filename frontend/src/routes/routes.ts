export const ROUTES = {
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  HOME: '/',
  NOTFOUND: '*',
  ABOUT: '/about',
  SECURITY: '/security',
} as const

export type TypeRoutes = keyof typeof ROUTES
