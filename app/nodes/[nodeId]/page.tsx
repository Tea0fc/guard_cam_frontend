'use client'

import { MyDevices } from 'widgets/MyDevices'

export default MyDevices

// eslint-disable-next-line
export async function generateStaticParams() {
  const nodes = await fetch('https://.../nodes').then(res => res.json())

  // eslint-disable-next-line
  return nodes.map((node: any) => ({
    slug: node.slug
  }))
}
