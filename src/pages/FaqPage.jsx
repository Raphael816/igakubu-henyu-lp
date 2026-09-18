import { Breadcrumbs } from '../components/Breadcrumbs'
import { FAQ } from '../components/FAQ'
import { FinalCta } from '../components/FinalCta'
import { usePageMeta } from '../hooks/usePageMeta'

export function FaqPage() {
  usePageMeta({
    title: 'よくある質問',
    description: '医学部編入 個別伴走塾MEDTHOD SCHOOLについて、よくいただく質問と回答をまとめました。料金・対応科目・AIの使い方・解約条件などをご案内します。',
    path: '/faq',
  })

  return (
    <>
      <Breadcrumbs items={[{ path: '/', label: 'トップ' }, { path: '/faq', label: 'よくある質問' }]} />
      <div className="page-lead">
        <div className="wrap">
          <h1>よくある質問</h1>
        </div>
      </div>
      <FAQ withCta />
      <FinalCta />
    </>
  )
}
