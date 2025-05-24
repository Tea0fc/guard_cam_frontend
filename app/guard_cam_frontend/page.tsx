'use client'
import { redirect } from 'next/navigation'
import type { FC } from 'react'
import { memo, useEffect } from 'react'
import { ROUTES } from 'shared/model/const'

const RedirectPage: FC = memo(() => {
  useEffect(() => {
    redirect(ROUTES.LOGIN)
  }, [])

  return <section>Redirecting to authorization</section>
})

export default RedirectPage
