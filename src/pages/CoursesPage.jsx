import { Breadcrumbs } from '../components/Breadcrumbs'
import { Pricing } from '../components/Pricing'
import { ConsultationInfo } from '../components/ConsultationInfo'
import { FAQ } from '../components/FAQ'
import { FinalCta } from '../components/FinalCta'
import { FAQS } from '../data/content'
import { usePageMeta } from '../hooks/usePageMeta'

const PRICING_FAQS = FAQS.filter((f) =>
  [
    '授業時間は何分ですか？',
    '質問にはどのように回答してもらえますか？',
    '添削の対象は何ですか？',
    '教材費は料金に含まれますか？',
    '入会金はかかりますか？',
    'モニター価格はありますか？',
    'お支払い方法を教えてください',
    '途中解約や休会はできますか？',
    '3ヶ月・6ヶ月の一括契約は期間終了後どうなりますか？',
  ].includes(f.q),
)

export function CoursesPage() {
  usePageMeta({
    title: 'コース・料金',
    description:
      'MEDTHOD SCHOOLの月額プランは3種類。ベーシック39,800円、プレミアム98,000円、完全伴走198,000円(すべて税込)。料金に含まれる支援内容を詳しく紹介します。',
    path: '/courses',
  })

  return (
    <>
      <Breadcrumbs items={[{ path: '/', label: 'トップ' }, { path: '/courses', label: 'コース・料金' }]} />
      <div className="page-lead">
        <div className="wrap">
          <h1>コース・料金</h1>
          <p>
            月額料金は、授業時間だけの対価ではなく、学習計画の作成・添削・成績管理を含めた「合格までの個別管理費用」です。
          </p>
        </div>
      </div>
      <Pricing />
      <FAQ items={PRICING_FAQS} withJsonLd={false} />
      <ConsultationInfo ctaId="line_final" />
      <FinalCta />
    </>
  )
}
