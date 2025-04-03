import type { FC } from 'react'
import { memo } from 'react'

import { Button } from 'shared/ui'

import type { IDevicesList } from 'entities/Devices'

import { DeviceIndicator } from '../DeviceIndicator'
import module from './DevicesList.module.scss'
import { usePathname } from 'next/navigation'
import { ROUTES } from 'shared/model/const'

interface IProps {
  list?: IDevicesList[]
}

export const DevicesList: FC<IProps> = memo(({ list }) => {
  const pathname = usePathname()
  const endOfString = pathname.includes(ROUTES.DEVICES)
    ? 'устройств к узлу'
    : 'узлов'

  return (
    <div className={module.wrapper}>
      {list ? (
        list.map(item => (
          <Button
            mode="secondary"
            link={`/${item.id}`}
            label={item.title}
            isGrow
            rightIcon={<DeviceIndicator isWorked={item.isWorked} />}
          />
        ))
      ) : (
        <p className={module.empty}>
          У вас пока что еще нет подключенных {endOfString}
        </p>
      )}
    </div>
  )
})
