import { Reveal } from './Reveal'
import { Tilt } from './Tilt'

// TODO: 期間・面談回数・金額は叩き台。運営側で正式な条件が決まり次第、数字を差し替える。
const INCLUDED = [
  '週1回、演習結果をもとにしたAI学習プランの作成・監修者確認',
  '月2回のオンライン面談',
  '成績管理・単元登録・教材の利用',
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
          合格者監修 × AIによる週次カリキュラム作成を、月々の伴走でご提供します。
        </Reveal>
        <Reveal delay={0.15}>
          <Tilt className="pricing-card">
            <span className="tag">MEDTHOD SCHOOL 本コース(3ヶ月)</span>
            <div className="price">
              150,000<small>円(総額・税込)</small>
            </div>
            <ul className="pricing-included">
              {INCLUDED.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="note">お支払い方法・解約条件の詳細は、無料相談でご案内します。</p>
          </Tilt>
        </Reveal>
      </div>
    </section>
  )
}
