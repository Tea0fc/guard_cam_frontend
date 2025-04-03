import type { FC, PropsWithChildren } from 'react'
import { memo } from 'react'

import module from './GridLayout.module.scss'

interface IProps {
  title: string
}

export const GridLayout: FC<PropsWithChildren & IProps> = memo(
  ({ children, title }) => {
    return (
      <section className={module.wrapper}>
        <h1 className={module.title}>{title}</h1>
        <ul className={module.layout}>{children}</ul>
      </section>
    )
  }
)
