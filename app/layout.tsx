import { Suspense } from 'react'

import { MainLayout } from 'app/layouts/MainLayout'

import 'app/styles/index.scss'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Suspense>
          <MainLayout>{children}</MainLayout>
        </Suspense>
      </body>
    </html>
  )
}

export default RootLayout
