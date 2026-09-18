import { useEffect } from 'react'

const SITE_NAME = 'MEDTHOD SCHOOL'
const BASE_URL = 'https://raphael816.github.io/igakubu-henyu-lp'

function setMeta(name, content, attr = 'name') {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

// ページごとの title / description / canonical / OGP を設定する軽量フック。
// react-helmet 等の追加依存を避け、DOM を直接更新する。
export function usePageMeta({ title, description, path = '/' }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME}｜医学部学士編入 個別伴走塾`
    document.title = fullTitle
    setMeta('description', description)
    setLink('canonical', `${BASE_URL}${path}`)
    setMeta('og:title', fullTitle, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:type', 'website', 'property')
    setMeta('og:url', `${BASE_URL}${path}`, 'property')
    setMeta('og:site_name', SITE_NAME, 'property')
    setMeta('twitter:card', 'summary')
    setMeta('twitter:title', fullTitle)
    setMeta('twitter:description', description)
  }, [title, description, path])
}
