import type { FC } from 'react'
import { memo } from 'react'

import { AuthLayout } from 'widgets/AuthLayout'
import { Login } from 'widgets/Login'

export const LoginPage: FC = memo(() => {
  return (
    <AuthLayout>
      <Login />
    </AuthLayout>
  )
})
