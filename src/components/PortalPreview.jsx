import { motion } from 'framer-motion'
import { Reveal, staggerContainer, staggerItem } from './Reveal'
import { Tilt } from './Tilt'
import { PORTAL_FEATURES } from '../data/content'
import homeShot from '../assets/portal/home.png'
import unitsShot from '../assets/portal/units.png'
import gradesShot from '../assets/portal/grades.png'

const SHOTS = [
  { src: homeShot, alt: '生徒ページ ホームダッシュボードの実際の画面(デモアカウント)' },
  { src: unitsShot, alt: '生徒ページ 登録中の単元一覧の実際の画面(デモアカウント)' },
  { src: gradesShot, alt: '生徒ページ 成績管理の実際の画面(デモアカウント)' },
]

const AVAILABLE = PORTAL_FEATURES.filter((f) => f.built)
const UPCOMING = PORTAL_FEATURES.filter((f) => !f.built)

export function PortalPreview() {
  return (
    <section id="portal" className="alt">
      <div className="wrap">
        <Reveal as="span" className="eyebrow-label">
          STUDENT PORTAL
        </Reveal>
        <Reveal as="h2" className="section-title">
          生徒ページ(学習管理システム)
        </Reveal>
        <Reveal as="p" className="section-lede" delay={0.1}>
          実際に生徒が利用する画面です(デモアカウントによる実際の画面表示)。
        </Reveal>
        <motion.div
          className="portal-shots"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {SHOTS.map((shot) => (
            <Tilt className="sample-shot-frame" key={shot.alt} variants={staggerItem}>
              <img src={shot.src} alt={shot.alt} className="sample-shot" loading="lazy" />
            </Tilt>
          ))}
        </motion.div>

        <motion.div
          className="service-grid portal-feature-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {AVAILABLE.map((f) => (
            <Tilt className="service-card" key={f.title} variants={staggerItem}>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </Tilt>
          ))}
        </motion.div>

        {UPCOMING.length > 0 && (
          <Reveal delay={0.15} className="upcoming-note">
            <p className="upcoming-note-label">今後対応予定</p>
            <ul>
              {UPCOMING.map((f) => (
                <li key={f.title}>
                  {f.title}: {f.body}
                </li>
              ))}
            </ul>
          </Reveal>
        )}
      </div>
    </section>
  )
}
