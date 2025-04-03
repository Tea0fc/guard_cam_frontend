import type { FC } from 'react'
import { memo } from 'react'

import { ROUTES } from 'shared/model/const'
import { Button } from 'shared/ui'

import module from './UserActions.module.scss'

export const UserActions: FC = memo(() => {
  return (
    <div className={module.wrapper}>
      <Button
        mode="secondary"
        label="Выйти из аккаунта"
        link={ROUTES.LOGIN}
        isGrow
        isCenter
      />
    </div>
  )
})
