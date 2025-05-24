'use client'

import { MyDevices } from 'widgets/MyDevices'

// eslint-disable-next-line
export function generateStaticParams() {
  return [{ slug: [''] }]
}

export default MyDevices
