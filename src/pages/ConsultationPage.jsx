import { Breadcrumbs } from '../components/Breadcrumbs'
import { ConsultationInfo } from '../components/ConsultationInfo'
import { HowItWorks } from '../components/HowItWorks'
import { FAQ } from '../components/FAQ'
import { usePageMeta } from '../hooks/usePageMeta'
import { FAQS } from '../data/content'

const CONSULTATION_FAQS = FAQS.filter((f) =>
  ['志望校が決まっていなくても相談できますか？', '無料相談では何をしますか？', '途中解約や休会はできますか？'].includes(f.q),
)

export function ConsultationPage() {
  usePageMeta({
    title: '無料相談',
    description:
      'MEDTHOD SCHOOLの無料相談では、現在の学力・学習経験・志望校・確保できる勉強時間などを整理し、学習の方向性と適したプランをご提案します。LINEから気軽にご相談いただけます。',
    path: '/consultation',
  })

  return (
    <>
      <Breadcrumbs items={[{ path: '/', label: 'トップ' }, { path: '/consultation', label: '無料相談' }]} />
      <div className="page-lead">
        <div className="wrap">
          <h1>無料相談</h1>
          <p>LINE公式アカウントから、無料相談をお申し込みいただけます。</p>
        </div>
      </div>
      <ConsultationInfo ctaId="line_final" />
      <HowItWorks />
      <FAQ items={CONSULTATION_FAQS} withJsonLd={false} />
    </>
  )
}
