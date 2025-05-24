'use client'
import { DevicePage } from 'pages/DevicePage'

export default DevicePage

// eslint-disable-next-line
export async function generateStaticParams() {
  const devices = await fetch('https://.../device').then(res => res.json())

  // eslint-disable-next-line
  return devices.map((device: any) => ({
    slug: device.slug
  }))
}
