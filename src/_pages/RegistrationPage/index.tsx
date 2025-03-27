import type { FC } from 'react'
import { memo } from 'react'

import { AuthLayout } from 'widgets/AuthLayout'
import { Registration } from 'widgets/Registration'

export const RegistrationPage: FC = memo(() => {
  return (
    <AuthLayout>
      <Registration />
    </AuthLayout>
  )
})
