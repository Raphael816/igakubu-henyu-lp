import { motion } from 'framer-motion'
import { Reveal, staggerContainer, staggerItem } from './Reveal'
import { Tilt } from './Tilt'

// TODO: 期間・金額・面談回数は叩き台。運営側で正式な条件が決まり次第、数字を差し替える。
const INCLUDED = [
  '週1回、演習結果をもとにしたAI学習プランの作成・監修者確認',
  '月2回のオンライン面談',
  '成績管理・単元登録・教材の利用',
]

const PLANS = [
  {
    name: '1ヶ月コース',
    months: 1,
    total: 60000,
    monthly: 60000,
    tag: 'お試し',
    highlight: false,
  },
  {
    name: '3ヶ月コース',
    months: 3,
    total: 150000,
    monthly: 50000,
    tag: 'おすすめ',
    highlight: true,
  },
  {
    name: '6ヶ月コース',
    months: 6,
    total: 270000,
    monthly: 45000,
    tag: '一番お得',
    highlight: false,
  },
]

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
          合格者監修 × AIによる週次カリキュラム作成を、月々の伴走でご提供します。期間に応じて3つのコースをご用意しています。
        </Reveal>
        <motion.div
          className="pillars pricing-plans"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {PLANS.map((plan) => (
            <Tilt
              className={`pricing-card${plan.highlight ? ' pricing-card-highlight' : ''}`}
              key={plan.name}
              variants={staggerItem}
            >
              <span className="tag">{plan.tag}</span>
              <h3 className="pricing-plan-name">{plan.name}</h3>
              <div className="price">
                {plan.total.toLocaleString()}
                <small>円(総額・税込)</small>
              </div>
              <p className="pricing-monthly">月あたり {plan.monthly.toLocaleString()}円換算</p>
              <ul className="pricing-included">
                {INCLUDED.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Tilt>
          ))}
        </motion.div>
        <Reveal as="p" className="pricing-footnote" delay={0.2}>
          お支払い方法・解約条件の詳細は、無料相談でご案内します。
        </Reveal>
      </div>
    </section>
  )
}
