import { Reveal } from './Reveal'

export function Pricing() {
  return (
    <section id="pricing">
      <div className="wrap">
        <Reveal as="span" className="eyebrow-label">
          PRICING
        </Reveal>
        <Reveal as="h2" className="section-title">
          料金について
        </Reveal>
        <Reveal as="p" className="section-lede" delay={0.1}>
          合格者監修 × AIによる週次カリキュラム作成を、月々の伴走でご提供します。
        </Reveal>
        <Reveal delay={0.15} className="pricing-card">
          <span className="tag">MEDTHOD SCHOOL 本コース</span>
          <div className="price">
            150,000<small>円〜</small>
          </div>
          <p className="note">詳しい内容・お支払い方法は、まず無料相談でご案内します。</p>
        </Reveal>
      </div>
    </section>
  )
}
