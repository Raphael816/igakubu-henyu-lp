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
          まずは無料相談で、あなたに合うプランをご提案します。
        </Reveal>
        <Reveal delay={0.15} className="pricing-card">
          <span className="tag">先着限定 モニター価格</span>
          <div className="price">
            30,000<small>円〜</small>
          </div>
          <p className="note">本コースの詳細・料金は、無料相談の内容に応じて個別にご案内しています。</p>
        </Reveal>
      </div>
    </section>
  )
}
