import type { FC } from 'react'
import { memo, useState } from 'react'

import { FirstStep } from '../FirstStep/FirstStep'
import { SecondStep } from '../SecondStep/SecondStep'
import { FinalStep } from '../FinalStep/FinalStep'

export const Recovery: FC = memo(() => {
  const [email, setEmail] = useState('')
  const [isRecovered, setIsRecovered] = useState(false)

  if (email && !isRecovered) {
    return (
      <SecondStep
        onRecoveryChange={recoveryState => setIsRecovered(recoveryState)}
      />
    )
  }

  if (isRecovered) {
    return <FinalStep email={email} />
  }

  return <FirstStep onEmailChange={email => setEmail(email)} />
})
