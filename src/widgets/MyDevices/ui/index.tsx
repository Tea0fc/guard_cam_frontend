import { useParams } from 'next/navigation'
import type { FC } from 'react'
import { memo } from 'react'

import { DeviceList } from 'entities/Devices'

import { DevicesList } from 'features/DevicesList'
import { NodeActions } from 'features/NodeActions/ui'
import type { IObjectFields } from 'features/ObjectInfo'
import { ObjectInfo } from 'features/ObjectInfo'

import { GridLayout } from 'widgets/GridLayout'
import { NodeList } from 'widgets/MyNodes'

export const MyDevices: FC = memo(() => {
  const { nodeId } = useParams()
  const curNode = NodeList.filter(node => node.id === nodeId)[0]

  const nodeField: IObjectFields[] = [
    ['Состояние', 'отличное'],
    ['Количество устройств', '24'],
    ['Подключение', 'стабильное']
  ]

  return (
    <GridLayout title="Устройства узла">
      <li>
        <DevicesList list={DeviceList} linkPrefix="device" />
      </li>
      <li>
        <ObjectInfo title={curNode.title} fieldList={nodeField} />
      </li>
      <li>
        <NodeActions />
      </li>
    </GridLayout>
  )
})
