import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const BASE_URL = 'https://raphael816.github.io/igakubu-henyu-lp'

function setJsonLd(id, data) {
  let el = document.getElementById(id)
  if (!el) {
    el = document.createElement('script')
    el.id = id
    el.type = 'application/ld+json'
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

// パンくずリスト。表示だけでなく BreadcrumbList の構造化データも出力する。
export function Breadcrumbs({ items }) {
  useEffect(() => {
    setJsonLd('breadcrumb-jsonld', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.label,
        item: `${BASE_URL}${item.path}`,
      })),
    })
  }, [items])

  return (
    <nav className="breadcrumbs" aria-label="パンくずリスト">
      <div className="wrap">
        <ol>
          {items.map((item, i) => (
            <li key={item.path}>
              {i === items.length - 1 ? (
                <span aria-current="page">{item.label}</span>
              ) : (
                <Link to={item.path}>{item.label}</Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
