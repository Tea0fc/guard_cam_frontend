import { useEffect, useLayoutEffect, useState } from 'react'
import { WINDOWS_SIZES } from 'shared/model/const'

interface OutType {
  isDekstop: boolean
  is1366: boolean
  is1280: boolean
  is1024: boolean
  is768: boolean
  is320: boolean
  width: number
}

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

export const useWindowSize = (): OutType => {
  const { BIG, LG, MD, SM, XS } = WINDOWS_SIZES
  const [width, setWidth] = useState(0)

  const isTrue = (size: number): boolean => width >= size

  const handleResize = (): void => {
    setWidth(document.body.clientWidth)
  }

  useIsomorphicLayoutEffect(() => {
    handleResize()
  }, [])

  useIsomorphicLayoutEffect(() => {
    window.addEventListener('resize', handleResize)
    return (): void => window.removeEventListener('resize', handleResize)
  }, [])

  return {
    is320: isTrue(0),
    is768: isTrue(XS),
    is1024: isTrue(SM),
    is1280: isTrue(MD),
    is1366: isTrue(LG),
    isDekstop: isTrue(BIG),
    width: width
  }
}
