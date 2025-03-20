import Head from 'next/head'
import type { AppProps } from 'next/app'

import { AppProvider } from 'app/providers/AppProvider'

import 'app/styles/index.scss'
import { useCallback, useEffect, useState } from 'react'
import { pageTitles } from 'shared/model/const'
import { useRouter } from 'next/router'

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()
  const [pageTitle, setPageTitle] = useState('Загрузка...')

  const handleRouteComplete = useCallback(() => {
    const newTitle = pageTitles.filter(item => {
      const pathnameList = router.pathname.split('/')
      return `/${pathnameList[pathnameList.length - 1]}` === item.link
    })
    const titleSecondLevel = pageTitles.filter(item => {
      const pathnameList = router.pathname.split('/')
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
      setPageTitle(newTitle[0].title)
    } else if (titleSecondLevel.length > 0) {
      setPageTitle(titleSecondLevel[0].title)
    }
  }, [router.pathname])

  useEffect(() => {
    const handleRouteChange = () => {
      setPageTitle('Загрузка...')
    }

    router.events.on('routeChangeStart', handleRouteChange)
    router.events.on('routeChangeComplete', handleRouteComplete)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
      router.events.off('routeChangeComplete', handleRouteComplete)
    }
  }, [router.events, pageTitle, setPageTitle, handleRouteComplete])

  useEffect(() => {
    handleRouteComplete()
  }, [handleRouteComplete])

  return (
    <AppProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Seller</title>
      </Head>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default App
