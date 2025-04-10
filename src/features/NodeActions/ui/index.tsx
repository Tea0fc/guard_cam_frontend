import type { FC } from 'react'
import { memo } from 'react'

import { ROUTES } from 'shared/model/const'
import { Button } from 'shared/ui'

import module from './NodeActions.module.scss'

export const NodeActions: FC = memo(() => {
  return (
    <div className={module.wrapper}>
      <Button
        mode="secondary"
        label="В начало"
        target="_self"
        link={ROUTES.NODES}
        isGrow
        isCenter
      />
      <Button
        mode="secondary"
        label="Удалить узел"
        target="_self"
        link={ROUTES.NODES}
        isGrow
        isCenter
      />
    </div>
  )
})
