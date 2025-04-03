import type { z } from 'zod'

import type {
  confirmEmailSchema,
  loginSchema,
  recoveryPasswordSchema,
  registrationSchema
} from '../schemas'

export type ILoginValues = z.infer<typeof loginSchema>

export type IRegistrationValues = z.infer<typeof registrationSchema>

export type IConfirmEmailValues = z.infer<typeof confirmEmailSchema>

export type IRecoveryPasswordValues = z.infer<typeof recoveryPasswordSchema>

export interface IUser {
  id: string
  name: string
  lastName: string
  secondName: string
  email: string
}
