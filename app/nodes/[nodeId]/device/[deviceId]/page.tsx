'use client'
import { DevicePage } from 'pages/DevicePage'

// eslint-disable-next-line
export function generateStaticParams() {
  return [{ slug: [''] }]
}

export default DevicePage
