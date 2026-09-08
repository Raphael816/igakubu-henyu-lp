import { Reveal } from './Reveal'
import { Tilt } from './Tilt'

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
              <span className="placeholder-note">
                TODO: 実名・写真の公開可否をご本人に確認のうえ、プロフィール文を差し替えてください
              </span>
            </div>
          </Tilt>
        </Reveal>
      </div>
    </section>
  )
}
