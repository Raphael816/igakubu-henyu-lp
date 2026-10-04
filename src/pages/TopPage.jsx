import { Hero } from '../components/Hero'
import { PainPoints } from '../components/PainPoints'
import { Solutions } from '../components/Solutions'
import { Services } from '../components/Services'
import { InlineCtaBanner } from '../components/InlineCtaBanner'
import { HowItWorks } from '../components/HowItWorks'
import { LearningStages } from '../components/LearningStages'
import { PortalPreview } from '../components/PortalPreview'
import { TeachingFeatures } from '../components/TeachingFeatures'
import { ComparisonTable } from '../components/ComparisonTable'
import { AIExplainer } from '../components/AIExplainer'
import { Pricing } from '../components/Pricing'
import { ConsultationInfo } from '../components/ConsultationInfo'
import { Mentor } from '../components/Mentor'
import { FAQ } from '../components/FAQ'
import { FinalCta } from '../components/FinalCta'
import { usePageMeta } from '../hooks/usePageMeta'

export function TopPage() {
  usePageMeta({
    title: undefined,
    description:
      '医学部学士編入試験を目指す大学生・大学院生・社会人のための個別伴走塾。英語・生命科学の個別指導、学習計画、答案添削、志望校選定、面接対策まで、合格までの学習を一元管理します。無料相談はLINEから。',
    path: '/',
  })

  return (
    <>
      <Hero />
      <PainPoints />
      <Solutions />
      <Services />
      <InlineCtaBanner ctaId="line_service" text="サービス内容について、詳しく相談してみませんか？" />
      <HowItWorks />
      <LearningStages />
      <PortalPreview />
      <InlineCtaBanner ctaId="line_student_portal" text="生徒ページの使い方や登録方法は、無料相談でご案内します。" />
      <TeachingFeatures />
      <ComparisonTable />
      <AIExplainer />
      <Pricing />
      <ConsultationInfo ctaId="line_final" />
      <Mentor />
      <FAQ withCta />
      <FinalCta />
    </>
  )
}
