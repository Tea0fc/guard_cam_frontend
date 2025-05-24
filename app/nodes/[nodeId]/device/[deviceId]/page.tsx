'use client'
import { DevicePage } from 'pages/DevicePage'

// eslint-disable-next-line
export function generateStaticParams() {
  return [{ nodeId: [''] }, { deviceId: [''] }]
}

export default DevicePage
