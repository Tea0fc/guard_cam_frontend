import type { FC } from 'react'
import { memo, useState } from 'react'
import type { FieldValues, SubmitHandler } from 'react-hook-form'

import { ROUTES } from 'shared/model/const'
import { useFormHandling } from 'shared/lib'
import { Button, Input } from 'shared/ui'

import type { IRegistrationValues } from 'entities/User'
import { registrationSchema, FieldsRange } from 'entities/User'

import { AuthWrapper } from 'features/AuthWrapper'

import module from './Registration.module.scss'

const defaultValues: IRegistrationValues = {
  name: '',
  lastName: '',
  secondName: '',
  email: '',
  password: '',
  password_confirm: ''
}

export const Registration: FC = memo(() => {
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
  } = useFormHandling(registrationSchema, defaultValues)

  const [isError, setIsError] = useState('')

  // eslint-disable-next-line
  const onSubmit: SubmitHandler<FieldValues> = data => {}

  const handleChangeAndResetError = (
    evt: React.ChangeEvent<HTMLInputElement>,
    valueField: keyof IRegistrationValues
  ): void => {
    setIsError('')
    clearErrors()
    const data = {
      ...formValues,
      [valueField]: evt.target.value
    }
    handleChange(valueField as keyof IRegistrationValues)
    setFormValues(data)
  }

  return (
    <AuthWrapper title="Регистрация" changeHandler={handleSubmit(onSubmit)}>
      <div className={module.inputWrapper}>
        <div className={module.row}>
          <Input
            {...register('name')}
            id="name"
            label="Имя"
            placeholder="Введите имя"
            maxLength={FieldsRange.NAME_MAX}
            helpText={setErrorText(errors, 'name')}
            helpTextType={setErrorTextType(errors, 'name')}
            value={formValues.name}
            onChange={e => handleChangeAndResetError(e, 'name')}
          />
          <Input
            {...register('lastName')}
            id="lastName"
            label="Фамилия"
            placeholder="Введите фамилию"
            maxLength={FieldsRange.NAME_MAX}
            helpText={setErrorText(errors, 'lastName')}
            helpTextType={setErrorTextType(errors, 'lastName')}
            value={formValues.lastName}
            onChange={e => handleChangeAndResetError(e, 'lastName')}
          />
          <Input
            {...register('secondName')}
            id="secondName"
            label="Отчество"
            placeholder="Введите отчество"
            maxLength={FieldsRange.NAME_MAX}
            helpText={setErrorText(errors, 'secondName')}
            helpTextType={setErrorTextType(errors, 'secondName')}
            value={formValues.secondName}
            onChange={e => handleChangeAndResetError(e, 'secondName')}
          />
        </div>
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
        <div className={module.row}>
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
      </div>
      {isError && <p className={module.error}>{isError}</p>}
      <div className={module.btnWrapper}>
        <Button
          type="submit"
          label="Зарегистрироваться"
          isGrow
          isCenter
          borderRadius={8}
          className={module.mainBtn}
        />
        <Button
          mode="clear"
          link={ROUTES.LOGIN}
          label="Перейти к авторизации"
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
