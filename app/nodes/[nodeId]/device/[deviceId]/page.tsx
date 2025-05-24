'use client'
import { DevicePage } from 'pages/DevicePage'

export default DevicePage

// eslint-disable-next-line
export async function generateStaticParams() {
  const posts = await fetch('https://.../posts').then(res => res.json())

  // eslint-disable-next-line
  return posts.map((post: any) => ({
    slug: post.slug
  }))
}
