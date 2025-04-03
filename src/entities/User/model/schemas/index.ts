import { z } from 'zod'

import { stringRequiredSchema } from 'shared/model/const/schemas'

import {
  ErrorMessages,
  FieldsRange,
  REGEX_NAME,
  REGEX_PASSWORD,
  REGEX_PASSWORD_HAS_LETTERS,
  REGEX_PASSWORD_HAS_NUMBER
} from '../consts'

const userEmailSchema = z
  .string()
  .nonempty({ message: ErrorMessages.REQUIRED_FIELD })
  .max(FieldsRange.EMAIL_MAX, { message: ErrorMessages.EMAIL_MAX })
  .email({ message: ErrorMessages.EMAIL_INVALID })

const userPasswordSchema = z
  .string()
  .nonempty({ message: ErrorMessages.REQUIRED_FIELD })
  .min(FieldsRange.PASSWORD_MIN, { message: ErrorMessages.PASSWORD_MIN })
  .max(FieldsRange.PASSWORD_MAX, { message: ErrorMessages.PASSWORD_MAX })
  .regex(REGEX_PASSWORD, {
    message: ErrorMessages.PASSWORD_INVALID
  })
  .refine(
    value =>
      REGEX_PASSWORD_HAS_LETTERS.test(value) &&
      REGEX_PASSWORD_HAS_NUMBER.test(value),
    {
      message: ErrorMessages.PASSWORD_REQUIREMENTS
    }
  )

const userNameSchema = stringRequiredSchema
  .min(FieldsRange.NAME_MIN, { message: ErrorMessages.NAME_MIN })
  .max(FieldsRange.NAME_MAX, { message: ErrorMessages.NAME_MAX })
  .regex(REGEX_NAME, {
    message: ErrorMessages.NAME_INVALID
  })

const userLastNameSchema = stringRequiredSchema
  .min(FieldsRange.NAME_MIN, { message: ErrorMessages.LAST_NAME_MIN })
  .max(FieldsRange.NAME_MAX, { message: ErrorMessages.LAST_NAME_MAX })
  .regex(REGEX_NAME, {
    message: ErrorMessages.LAST_NAME_INVALID
  })

const userSecondNameSchema = z
  .string()
  .optional()
  .refine(
    value => {
      if (!value) return true
      return REGEX_NAME.test(value)
    },
    {
      message: ErrorMessages.SECOND_NAME_INVALID
    }
  )
  .refine(
    value => {
      if (!value) return true
      return value.length >= FieldsRange.NAME_MIN
    },
    {
      message: ErrorMessages.SECOND_NAME_MIN
    }
  )
  .refine(
    value => {
      if (!value) return true
      return value.length <= FieldsRange.NAME_MAX
    },
    {
      message: ErrorMessages.SECOND_NAME_MAX
    }
  )

export const loginSchema = z.object({
  email: userEmailSchema,
  password: userPasswordSchema
})

export const registrationSchema = z
  .object({
    name: userNameSchema,
    lastName: userLastNameSchema,
    secondName: userSecondNameSchema,
    email: userEmailSchema,
    password: userPasswordSchema,
    password_confirm: userPasswordSchema
  })
  .refine(data => data.password === data.password_confirm, {
    path: ['password_confirm'],
    message: ErrorMessages.PASSWORDS_DO_NOT_MATCH
  })

export const confirmEmailSchema = z.object({
  email: userEmailSchema
})

export const recoveryPasswordSchema = z
  .object({
    password: userPasswordSchema,
    password_confirm: userPasswordSchema
  })
  .refine(data => data.password === data.password_confirm, {
    path: ['password_confirm'],
    message: ErrorMessages.PASSWORDS_DO_NOT_MATCH
  })
