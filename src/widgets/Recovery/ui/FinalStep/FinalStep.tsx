import type { FC } from 'react'
import { memo } from 'react'

import { ROUTES } from 'shared/model/const'
import { Button } from 'shared/ui'

import module from './FinalStep.module.scss'

interface IProps {
  email: string
}

export const FinalStep: FC<IProps> = memo(({ email }) => {
  return (
    <div className={module.wrapper}>
      <h1 className={module.title}>Письмо отправлено</h1>
      <p className={module.desc}>
        На вашу электронную почту {email} отправлено письмо с инструкциями о
        дальнейших действиях по восстановлению пароля.
      </p>
      <Button link={ROUTES.LOGIN} label="Ок" isGrow isCenter target="_self" />
    </div>
  )
})
