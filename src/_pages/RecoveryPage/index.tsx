import type { FC } from 'react'
import { memo } from 'react'

import { AuthLayout } from 'widgets/AuthLayout'
import { Recovery } from 'widgets/Recovery'

export const RecoveryPage: FC = memo(() => {
  return (
    <AuthLayout>
      <Recovery />
    </AuthLayout>
  )
})
