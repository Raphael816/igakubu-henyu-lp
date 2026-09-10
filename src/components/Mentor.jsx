import { Reveal } from './Reveal'
import { Tilt } from './Tilt'

// TODO: 実名・合格大学・合格年度・経歴が届き次第、本文とプロフィール写真を差し替える(本人の公開承諾は取得済み)

export function Mentor() {
  return (
    <section id="mentor" className="alt">
      <div className="wrap">
        <Reveal as="span" className="eyebrow-label">
          SUPERVISOR
        </Reveal>
        <Reveal as="h2" className="section-title">
          監修者紹介
        </Reveal>
        <Reveal delay={0.1}>
          <Tilt className="mentor">
            <div className="avatar">
              プロフィール
              <br />
              写真準備中
            </div>
            <div>
              <h3>監修者(医学部学士編入 合格者)</h3>
              <p>
                医学部学士編入試験に合格し、現在は医学部に在籍。自身の受験経験をもとに、遠回りしない学習設計を監修しています。
              </p>
              <span className="feature-badge">プロフィール準備中</span>
            </div>
          </Tilt>
        </Reveal>
      </div>
    </section>
  )
}
