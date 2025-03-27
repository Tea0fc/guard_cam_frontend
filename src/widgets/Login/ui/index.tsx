// import Script from 'next/script'
import type { FC } from 'react'
import { memo, useState } from 'react'
import type { FieldValues, SubmitHandler } from 'react-hook-form'

import { ROUTES } from 'shared/model/const'
import { useFormHandling } from 'shared/lib'
import { Button, Input } from 'shared/ui'

import type { ILoginValues } from 'entities/User'
import { FieldsRange, loginSchema } from 'entities/User'

import { AuthWrapper } from 'features/AuthWrapper'

import module from './Login.module.scss'

const defaultValues: ILoginValues = {
  email: '',
  password: ''
}

export const Login: FC = memo(() => {
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
  } = useFormHandling(loginSchema, defaultValues)

  const [isError, setIsError] = useState('')

  // eslint-disable-next-line
  const onSubmit: SubmitHandler<FieldValues> = data => {}

  const handleChangeAndResetError = (
    evt: React.ChangeEvent<HTMLInputElement>,
    valueField: keyof ILoginValues
  ): void => {
    setIsError('')
    clearErrors()
    const data = {
      ...formValues,
      [valueField]: evt.target.value
    }
    handleChange(valueField as keyof ILoginValues)
    setFormValues(data)
  }

  /*const onTelegramAuth = user => {
    alert(
      'Logged in as ' +
        user.first_name +
        ' ' +
        user.last_name +
        ' (' +
        user.id +
        (user.username ? ', @' + user.username : '') +
        ')'
    )
  }*/

  return (
    <AuthWrapper title="Авторизация" changeHandler={handleSubmit(onSubmit)}>
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
          className={module.input}
        />
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
          className={module.input}
        />
      </div>
      {isError && <p className={module.error}>{isError}</p>}
      <div className={module.btnWrapper}>
        <Button
          type="submit"
          label="Войти"
          isGrow
          isCenter
          borderRadius={8}
          className={module.mainBtn}
        />
        <Button
          mode="clear"
          link={ROUTES.REGISTRATION}
          label="Зарегистрироваться"
          size="md"
          isMinHeight
          isGrow
          isCenter
          target="_self"
          className={module.btn}
        />
        <Button
          mode="clear"
          link={ROUTES.RECOVERY}
          label="Забыли пароль?"
          size="md"
          isMinHeight
          isGrow
          isCenter
          target="_self"
          className={module.btn}
        />
        {/*Добавить когда запустим сервер

        <Script
          async
          src="https://telegram.org/js/telegram-widget.js?22"
          data-telegram-login="DmqaBot"
          data-size="large"
          data-onauth={user => onTelegramAuth(user)}
          data-request-access="write"
        />*/}
      </div>
    </AuthWrapper>
  )
})
