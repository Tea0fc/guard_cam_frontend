import type { FC } from 'react'
import { memo, useState } from 'react'
import type { FieldValues, SubmitHandler } from 'react-hook-form'

import { ROUTES } from 'shared/model/const'
import { useFormHandling } from 'shared/lib'
import { Button, Input } from 'shared/ui'

import type { IConfirmEmailValues } from 'entities/User'
import { confirmEmailSchema, FieldsRange } from 'entities/User'

import { AuthWrapper } from 'features/AuthWrapper'

import module from '../Recovery/Recovery.module.scss'

interface IProps {
  onEmailChange: (email: string) => void
}

const defaultValues: IConfirmEmailValues = {
  email: ''
}

export const FirstStep: FC<IProps> = memo(({ onEmailChange }) => {
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
  } = useFormHandling(confirmEmailSchema, defaultValues)

  const [isError, setIsError] = useState('')

  const onSubmit: SubmitHandler<FieldValues> = data => onEmailChange(data.email)

  const handleChangeAndResetError = (
    evt: React.ChangeEvent<HTMLInputElement>,
    valueField: keyof IConfirmEmailValues
  ): void => {
    setIsError('')
    clearErrors()
    const data = {
      ...formValues,
      [valueField]: evt.target.value
    }
    handleChange(valueField as keyof IConfirmEmailValues)
    setFormValues(data)
  }

  return (
    <AuthWrapper
      title="Восстановление пароля"
      changeHandler={handleSubmit(onSubmit)}
    >
      <div className={module.inputWrapper}>
        <Input
          {...register('email')}
          id="email"
          label="Email"
          placeholder="Введите свой Email"
          maxLength={FieldsRange.EMAIL_MAX}
          helpText={setErrorText(errors, 'email')}
          helpTextType={setErrorTextType(errors, 'email')}
          value={formValues.email}
          autoComplete="email"
          onChange={e => handleChangeAndResetError(e, 'email')}
        />
      </div>
      {isError && <p className={module.error}>{isError}</p>}
      <div className={module.btnWrapper}>
        <Button
          type="submit"
          label="Отправить"
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
