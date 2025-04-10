import type { FC } from 'react'
import { memo } from 'react'

import { useUserStore } from 'entities/User'

import { GridLayout } from 'widgets/GridLayout'

import { DevicesList } from 'features/DevicesList'
import type { IObjectFields } from 'features/ObjectInfo'
import { ObjectInfo } from 'features/ObjectInfo'
import { UserActions } from 'features/UserActions/ui'

import { NodeList } from '../model'

export const MyNodes: FC = memo(() => {
  const { user } = useUserStore()
  const { email, name, lastName, secondName } = user

  const userFields: IObjectFields[] = [['Почта', email]]
  const userName = `${lastName} ${name.charAt(0)}. ${secondName.charAt(0)}.`

  return (
    <GridLayout title="Мои узлы">
      <li>
        <DevicesList list={NodeList} />
      </li>
      <li>
        <ObjectInfo title={userName} fieldList={userFields} />
      </li>
      <li>
        <UserActions />
      </li>
    </GridLayout>
  )
})
