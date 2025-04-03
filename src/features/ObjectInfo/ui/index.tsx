import type { FC } from 'react'
import { memo } from 'react'

import type { IObjectFields } from '../model'
import module from './ObjectInfo.module.scss'

interface IProps {
  title: string
  fieldList: IObjectFields[]
}

export const ObjectInfo: FC<IProps> = memo(({ title, fieldList }) => {
  return (
    <div className={module.wrapper}>
      <h2 className={module.title}>{title}</h2>
      {fieldList.map(([label, value]) => (
        <div className={module.fieldWrapper}>
          <p className={module.label}>{label}:</p>
          <p className={module.value}>{value}</p>
        </div>
      ))}
    </div>
  )
})
