import { z } from 'zod'

import { ErrorMessages } from '../errors/index'

export const stringRequiredSchema = z
  .string()
  .nonempty({ message: ErrorMessages.REQUIRED_FIELD })

export const stringOptionalSchema = z.string().optional()

export const idsRequiredSchema = z
  .number()
  .nullable()
  .refine(value => value !== null && !isNaN(value), {
    message: ErrorMessages.REQUIRED_FIELD
  })
