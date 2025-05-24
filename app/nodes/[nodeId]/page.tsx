'use client'

import { MyDevices } from 'widgets/MyDevices'

// eslint-disable-next-line
export function generateStaticParams() {
  return [{ nodeId: [''] }]
}

export default MyDevices
