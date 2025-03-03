export const ROUTES = {
  // Public Routes
  LOGIN: '/login',
  REGISTER: '/register',
  HOME: '/',
  NOTFOUND: '*',
  ABOUT: '/about',
  SECURITY: '/security',

  // Privates Routes
  DASHBOARD: '/dashboard',
  WALLET: '/wallet',
  HISTORY_TRANSACTION: '/history-transaction',
} as const

export type TypeRoutes = keyof typeof ROUTES
