import { Breadcrumbs } from '../components/Breadcrumbs'
import { Solutions } from '../components/Solutions'
import { Services } from '../components/Services'
import { HowItWorks } from '../components/HowItWorks'
import { TeachingFeatures } from '../components/TeachingFeatures'
import { ComparisonTable } from '../components/ComparisonTable'
import { FinalCta } from '../components/FinalCta'
import { usePageMeta } from '../hooks/usePageMeta'

export function ServicePage() {
  usePageMeta({
    title: 'サービス詳細',
    description:
      '医学部編入 個別指導の内容を詳しく紹介。英語・生命科学の授業、学習計画、答案添削、志望校選定、面接対策など、合格までに必要な学習を一つずつ解説します。',
    path: '/service',
  })

  return (
    <>
      <Breadcrumbs items={[{ path: '/', label: 'トップ' }, { path: '/service', label: 'サービス詳細' }]} />
      <div className="page-lead">
        <div className="wrap">
          <h1>サービス詳細</h1>
          <p>MEDTHOD SCHOOLは、授業だけでなく、志望校選定から面接対策まで、合格までの学習全体を管理する塾です。</p>
        </div>
      </div>
      <Solutions />
      <Services />
      <HowItWorks />
      <TeachingFeatures />
      <ComparisonTable />
      <FinalCta />
    </>
  )
}
