import { Link } from 'react-router-dom'
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
          指導方針
        </Reveal>
        <Reveal delay={0.1}>
          <Tilt className="mentor">
            <div>
              <h3>医学部学士編入試験の合格者による監修</h3>
              <p>
                医学部学士編入試験に合格し、現在は医学部に在籍する監修者が、自身の受験経験をもとに学習の設計方針を監修しています。
                AIが作成する学習プラン案は、必ずこの監修者・講師が確認してから生徒にお届けします。
              </p>
              <Link to="/instructors" className="btn btn-outline btn-sm">
                指導方針・講師の採用基準を見る
              </Link>
            </div>
          </Tilt>
        </Reveal>
      </div>
    </section>
  )
}
