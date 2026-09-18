import { Reveal } from './Reveal'
import { LineCta } from './CtaLink'
import { Scene3D } from './Scene3D'

export function FinalCta() {
  return (
    <section id="cta">
      <div className="wrap">
        <Reveal className="cta-final">
          <Scene3D />
          <div className="cta-final-content">
            <h2>まずは無料相談から</h2>
            <p>
              現在の学力・志望校・お悩みをお伺いし、簡単な学習の方向性をご提案します。無理な勧誘は一切いたしません。
            </p>
            <LineCta ctaId="line_final" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
