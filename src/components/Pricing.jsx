import { motion } from 'framer-motion'
import { Reveal, staggerContainer, staggerItem } from './Reveal'
import { Tilt } from './Tilt'
import { LineCta } from './CtaLink'
import { PRICING_PLANS, PRICING_INCLUDED, UNDETERMINED_TERMS } from '../data/content'

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
          月額料金は、授業1時間の対価ではなく、授業外の学習管理を含めた「合格までの個別管理費用」です。
          <br />
          結果や合格を保証するものではありません。
        </Reveal>

        <Reveal delay={0.1} className="included-box">
          <p className="included-box-title">料金に含まれる支援</p>
          <ul className="included-box-list">
            {PRICING_INCLUDED.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>

        <motion.div
          className="pillars pricing-plans"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {PRICING_PLANS.map((plan) => (
            <Tilt
              className={`pricing-card${plan.highlight ? ' pricing-card-highlight' : ''}`}
              key={plan.id}
              variants={staggerItem}
            >
              {plan.tag && <span className="tag">{plan.tag}</span>}
              <h3 className="pricing-plan-name">{plan.name}</h3>
              <div className="price">
                {plan.price.toLocaleString()}
                <small>円/月(税込)</small>
              </div>
              <ul className="pricing-included">
                {plan.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <LineCta ctaId={plan.ctaId} label="このプランについて相談する" className="pricing-card-cta" />
            </Tilt>
          ))}
        </motion.div>

        <Reveal delay={0.2} className="pricing-footnote-box">
          <p className="pricing-footnote-title">現時点で確定していない項目</p>
          <p>以下は事業計画の段階では確定していないため、詳細は無料相談でご案内します。</p>
          <ul>
            {UNDETERMINED_TERMS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
