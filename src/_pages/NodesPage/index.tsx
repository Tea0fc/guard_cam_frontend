import type { FC } from 'react'
import { memo } from 'react'

import { MyNodes } from 'widgets/MyNodes'

export const NodesPage: FC = memo(() => {
  return <MyNodes />
})
