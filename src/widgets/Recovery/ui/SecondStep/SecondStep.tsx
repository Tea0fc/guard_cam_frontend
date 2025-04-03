import type { FC } from 'react'
import { memo, useState } from 'react'
import type { FieldValues, SubmitHandler } from 'react-hook-form'

import { ROUTES } from 'shared/model/const'
import { useFormHandling } from 'shared/lib'
import { Button, Input } from 'shared/ui'

import type { IRecoveryPasswordValues } from 'entities/User'
import { FieldsRange, recoveryPasswordSchema } from 'entities/User'

import { AuthWrapper } from 'features/AuthWrapper'

import module from '../Recovery/Recovery.module.scss'

interface IProps {
  onRecoveryChange: (recoveryState: boolean) => void
}

const defaultValues: IRecoveryPasswordValues = {
  password: '',
  password_confirm: ''
}

export const SecondStep: FC<IProps> = memo(({ onRecoveryChange }) => {
  const {
    register,
    handleSubmit,
    handleChange,
    setErrorTextType,
    setErrorText,
    clearErrors,
    setFormValues,
    formValues,
    errors
  } = useFormHandling(recoveryPasswordSchema, defaultValues)

  const [isError, setIsError] = useState('')

  // TODO: Добавить отправку паролей на апи с восстановлением пароля
  // eslint-disable-next-line
  const onSubmit: SubmitHandler<FieldValues> = data => onRecoveryChange(true)

  const handleChangeAndResetError = (
    evt: React.ChangeEvent<HTMLInputElement>,
    valueField: keyof IRecoveryPasswordValues
  ): void => {
    setIsError('')
    clearErrors()
    const data = {
      ...formValues,
      [valueField]: evt.target.value
    }
    handleChange(valueField as keyof IRecoveryPasswordValues)
    setFormValues(data)
  }

  return (
    <AuthWrapper
      title="Восстановление пароля"
      changeHandler={handleSubmit(onSubmit)}
    >
      <div className={module.inputWrapper}>
        <Input
          {...register('password')}
          id="password"
          label="Пароль"
          placeholder="Введите пароль"
          isPassword
          maxLength={FieldsRange.PASSWORD_MAX}
          helpText={setErrorText(errors, 'password')}
          helpTextType={setErrorTextType(errors, 'password')}
          value={formValues.password}
          autoComplete="password"
          onChange={e => handleChangeAndResetError(e, 'password')}
        />
        <Input
          {...register('password_confirm')}
          id="password_confirm"
          label="Подтверждение пароля"
          placeholder="Подтвердите пароль"
          isPassword
          maxLength={FieldsRange.PASSWORD_MAX}
          helpText={setErrorText(errors, 'password_confirm')}
          helpTextType={setErrorTextType(errors, 'password_confirm')}
          value={formValues.password_confirm}
          autoComplete="password"
          onChange={e => handleChangeAndResetError(e, 'password_confirm')}
        />
      </div>
      {isError && <p className={module.error}>{isError}</p>}
      <div className={module.btnWrapper}>
        <Button
          type="submit"
          label="Сбросить пароль"
          isGrow
          isCenter
          borderRadius={8}
          className={module.mainBtn}
        />
        <Button
          mode="clear"
          link={ROUTES.LOGIN}
          label="Назад"
          size="md"
          isMinHeight
          isGrow
          isCenter
          target="_self"
          className={module.btn}
        />
      </div>
    </AuthWrapper>
  )
})
