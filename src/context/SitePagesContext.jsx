import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

const SitePagesContext = createContext(null)

// HP管理(admin-web)でページの表示/非表示を切り替えると、ここで即座に反映される。
// 取得前・取得失敗時は「表示」扱いにする(非表示はあくまで運営者の明示的な操作が必要なため、
// 失敗時に全ページが消えるより、従来通り見える方が安全で、表示のたびに一瞬「準備中」が
// 挟まるチラつきも避けられる)。
export function SitePagesProvider({ children }) {
  const [visibility, setVisibility] = useState(null)

  useEffect(() => {
    let cancelled = false
    async function load() {
      const { data, error } = await supabase.from('site_pages').select('path, is_visible')
      if (cancelled) return
      if (error) {
        setVisibility({})
        return
      }
      const map = {}
      for (const row of data ?? []) map[row.path] = row.is_visible
      setVisibility(map)
    }
    load()
    return () => {
      cancelled = true
    }
  }, [])

  function isVisible(path) {
    if (visibility === null) return true
    return visibility[path] ?? true
  }

  return <SitePagesContext.Provider value={{ isVisible, loaded: visibility !== null }}>{children}</SitePagesContext.Provider>
}

export function useSitePages() {
  return useContext(SitePagesContext)
}
