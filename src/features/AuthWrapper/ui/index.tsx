import type { FC, FormEventHandler, PropsWithChildren } from 'react'
import { memo } from 'react'

import module from './AuthWrapper.module.scss'

interface IProps {
  title: string
  changeHandler: FormEventHandler<HTMLFormElement>
}

export const AuthWrapper: FC<IProps & PropsWithChildren> = memo(
  ({ title, changeHandler, children }) => {
    return (
      <form onSubmit={changeHandler} className={module.wrapper}>
        <h1 className={module.title}>{title}</h1>
        {children}
      </form>
    )
  }
)
