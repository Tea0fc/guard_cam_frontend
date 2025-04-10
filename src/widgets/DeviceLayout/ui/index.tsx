import type { FC, PropsWithChildren } from 'react'
import { memo } from 'react'

import module from './DeviceLayout.module.scss'

interface IProps {
  title: string
}

export const DeviceLayout: FC<PropsWithChildren & IProps> = memo(
  ({ title, children }) => {
    return (
      <section className={module.wrapper}>
        <h1 className={module.title}>{title}</h1>
        <ul className={module.layout}>{children}</ul>
      </section>
    )
  }
)
