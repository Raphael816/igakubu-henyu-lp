import { Breadcrumbs } from '../components/Breadcrumbs'
import { PortalPreview } from '../components/PortalPreview'
import { AIExplainer } from '../components/AIExplainer'
import { FinalCta } from '../components/FinalCta'
import { usePageMeta } from '../hooks/usePageMeta'

export function FeaturesPage() {
  usePageMeta({
    title: '生徒ページ・学習機能',
    description:
      '実際に利用する学習管理システム(生徒ページ)を紹介。ホームダッシュボード、単元登録、教材閲覧、動画視聴、問題演習、成績管理、弱点分析などの機能を、実際の画面とあわせて解説します。',
    path: '/features',
  })

  return (
    <>
      <Breadcrumbs items={[{ path: '/', label: 'トップ' }, { path: '/features', label: '生徒ページ・学習機能' }]} />
      <div className="page-lead">
        <div className="wrap">
          <h1>生徒ページ・学習機能</h1>
          <p>入塾後は、この学習管理システム上で単元登録・教材学習・演習・成績確認までを一元的に行います。</p>
        </div>
      </div>
      <PortalPreview />
      <AIExplainer />
      <FinalCta />
    </>
  )
}
