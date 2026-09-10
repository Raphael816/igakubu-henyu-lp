import { motion } from 'framer-motion'
import { Icon3D } from './Icon3D'
import { Reveal, staggerContainer, staggerItem } from './Reveal'
import { Tilt } from './Tilt'

const AVAILABLE = [
  {
    shape: 'octahedron',
    title: '一元成績管理',
    body: '週次の演習結果と学習プランの履歴を一つの画面で管理。進捗をいつでも振り返れます。',
  },
  {
    shape: 'icosahedron',
    title: '独自教材',
    body: '医学部学士編入試験に特化した独自教材を掲載。監修者が随時追加しています。',
  },
]

const UPCOMING = [
  'AIによる演習セットの自動生成(現在は学習内容の個別提案まで対応)',
  '一問一答形式の高速復習機能',
]

export function Features() {
  return (
    <section id="features">
      <div className="wrap">
        <Reveal as="span" className="eyebrow-label">
          FEATURES
        </Reveal>
        <Reveal as="h2" className="section-title">
          学習を支えるツール
        </Reveal>
        <Reveal as="p" className="section-lede" delay={0.1}>
          カリキュラムに加えて、学習を継続しやすくするツールをご利用いただけます。
        </Reveal>
        <motion.div
          className="pillars features-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {AVAILABLE.map((feature) => (
            <Tilt className="pillar" key={feature.title} variants={staggerItem}>
              <Icon3D shape={feature.shape} />
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </Tilt>
          ))}
        </motion.div>
        <Reveal delay={0.15} className="upcoming-note">
          <p className="upcoming-note-label">今後のアップデート予定</p>
          <ul>
            {UPCOMING.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
