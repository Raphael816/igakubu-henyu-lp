import { useSitePages } from '../context/SitePagesContext'
import { usePageMeta } from '../hooks/usePageMeta'
import { Breadcrumbs } from './Breadcrumbs'
import { FinalCta } from './FinalCta'

function ComingSoon({ path, label }) {
  usePageMeta({ title: label, description: `${label}は現在準備中です。`, path })
  return (
    <>
      <Breadcrumbs items={[{ path: '/', label: 'トップ' }, { path, label }]} />
      <div className="page-lead">
        <div className="wrap">
          <h1>準備中</h1>
          <p>このページは現在準備中です。公開まで今しばらくお待ちください。</p>
        </div>
      </div>
      <FinalCta />
    </>
  )
}

// HP管理で非表示に設定されたページを、404ではなく正直に「準備中」として見せる。
export function PageGate({ path, label, children }) {
  const { isVisible } = useSitePages()
  if (!isVisible(path)) return <ComingSoon path={path} label={label} />
  return children
}
