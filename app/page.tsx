'use client'
import { redirect } from 'next/navigation'
import type { FC } from 'react'
import { memo, useEffect } from 'react'

import { ROUTES } from 'shared/model/const'

const Main: FC = memo(() => {
  useEffect(() => {
    redirect(ROUTES.LOGIN)
  }, [])

  return <div>Hello world</div>
})

export default Main
