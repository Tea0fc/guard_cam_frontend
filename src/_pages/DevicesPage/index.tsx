import type { FC } from 'react'
import { memo } from 'react'

import { MyDevices } from 'widgets/MyDevices'

export const DevicesPage: FC = memo(() => {
  return <MyDevices />
})
