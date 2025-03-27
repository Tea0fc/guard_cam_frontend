import type { z } from 'zod'

import type { loginSchema, registrationSchema } from '../schemas'

export type ILoginValues = z.infer<typeof loginSchema>

export type IRegistrationValues = z.infer<typeof registrationSchema>
