import type { FC } from 'react'
import { memo } from 'react'
import classNames from 'classnames'

import module from './DeviceIndicator.module.scss'

interface IProps {
  isWorked: boolean
}

export const DeviceIndicator: FC<IProps> = memo(({ isWorked }) => {
  return (
    <div className={classNames(module.wrapper, { [module.worked]: isWorked })}>
      &#x200b;
    </div>
  )
})
