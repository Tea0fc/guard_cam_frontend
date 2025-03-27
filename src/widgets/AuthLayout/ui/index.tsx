import type { FC, PropsWithChildren } from 'react'
import { memo } from 'react'

import module from './AuthLayout.module.scss'

export const AuthLayout: FC<PropsWithChildren> = memo(({ children }) => {
  return <section className={module.wrapper}>{children}</section>
})
