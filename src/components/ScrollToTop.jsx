import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// HashRouterはページ遷移時にスクロール位置を自動で戻さないため、明示的にトップへ戻す。
export function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}
