import type { FC } from 'react'
import { memo } from 'react'

import { ROUTES } from 'shared/model/const'
import { Button } from 'shared/ui'

import module from './DeviceActions.module.scss'

export const DeviceActions: FC = memo(() => {
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
        label="Удалить устройство"
        target="_self"
        link={ROUTES.NODES}
        isGrow
        isCenter
      />
    </div>
  )
})
