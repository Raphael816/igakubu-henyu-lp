import { Reveal } from './Reveal'
import { Tilt } from './Tilt'
import planScreen from '../assets/plan-screen.png'

export function SamplePlan() {
  return (
    <section id="sample" className="alt">
      <div className="wrap">
        <Reveal as="span" className="eyebrow-label">
          SAMPLE
        </Reveal>
        <Reveal as="h2" className="section-title">
          実際の画面
        </Reveal>
        <Reveal as="p" className="section-lede" delay={0.1}>
          生徒には、こうした形で毎週の学習プランが届きます(サンプル画面)。
        </Reveal>
        <Reveal delay={0.15}>
          <Tilt className="sample-shot-frame">
            <img src={planScreen} alt="週次学習プラン画面のサンプル" className="sample-shot" />
          </Tilt>
        </Reveal>
      </div>
    </section>
  )
}
