'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import type { PropsWithChildren, FC } from 'react'
import { memo, useCallback, useEffect } from 'react'

import { AppProvider } from 'app/providers/AppProvider'

import { pageTitles } from 'shared/model/const'

export const MainLayout: FC<PropsWithChildren> = memo(({ children }) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const handleRouteComplete = useCallback(() => {
    const newTitle = pageTitles.filter(item => {
      const pathnameList = pathname?.split('/') || ''
      return `/${pathnameList[pathnameList.length - 1]}` === item.link
    })
    const titleSecondLevel = pageTitles.filter(item => {
      const pathnameList = pathname?.split('/') || ''
      const secondLevelDivider = 2
      if (pathnameList.length >= secondLevelDivider) {
        return (
          `/${pathnameList[pathnameList.length - secondLevelDivider]}` ===
          item.link
        )
      }
      return false
    })

    if (newTitle.length > 0) {
      document.title = newTitle[0].title
    } else if (titleSecondLevel.length > 0) {
      document.title = titleSecondLevel[0].title
    }
  }, [pathname])

  useEffect(() => {
    document.title = 'Загрузка...'
  }, [pathname, searchParams])

  useEffect(() => {
    handleRouteComplete()
  }, [handleRouteComplete])

  return (
    <AppProvider>
      <main>{children}</main>
    </AppProvider>
  )
})
