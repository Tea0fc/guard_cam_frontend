import type { FC } from 'react'
import { memo } from 'react'

import { DeviceLayout } from 'widgets/DeviceLayout'
import { useParams } from 'next/navigation'
import { DeviceList } from 'entities/Devices'

import type { IObjectFields } from 'features/ObjectInfo'
import { ObjectInfo } from 'features/ObjectInfo'
import { DeviceActions } from 'features/DeviceActions/ui'

export const Device: FC = memo(() => {
  const { deviceId } = useParams()
  const curDevice = DeviceList.filter(device => device.id === deviceId)[0]

  const deviceField: IObjectFields[] = [
    ['Статус', 'работает'],
    ['Заряд батареи', '100%'],
    ['Дата включения', '07.04.2025']
  ]

  return (
    <DeviceLayout title={curDevice.title}>
      <ObjectInfo title="Информация об устройстве" fieldList={deviceField} />
      <DeviceActions />
    </DeviceLayout>
  )
})
