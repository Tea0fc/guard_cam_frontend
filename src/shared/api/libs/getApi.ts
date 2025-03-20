export const getApi = (mode: 'self' | 'api'): string => {
  switch (process.env.NODE_ENV) {
    case 'development':
      return mode === 'self'
        ? `${process.env.NEXT_PUBLIC_BASE_DOMAIN}`
        : `${process.env.NEXT_PUBLIC_BASE_DOMAIN}api`
    case 'production':
      return mode === 'self'
        ? `${process.env.NEXT_PUBLIC_BASE_DOMAIN_PROD}`
        : `${process.env.NEXT_PUBLIC_BASE_DOMAIN_PROD}api`
    default:
      return 'http://localhost:3000'
  }
}
