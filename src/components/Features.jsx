import { motion } from 'framer-motion'
import { Icon3D } from './Icon3D'
import { Reveal, staggerContainer, staggerItem } from './Reveal'
import { Tilt } from './Tilt'

const FEATURES = [
  {
    shape: 'icosahedron',
    title: '独自教材',
    body: '医学部学士編入試験に特化した独自教材を、監修者が順次公開していきます。',
    badge: '順次公開',
  },
  {
    shape: 'octahedron',
    title: '一元成績管理',
    body: '週次の演習結果と学習プランの履歴を一つの画面で管理。進捗をいつでも振り返れます。',
  },
  {
    shape: 'dodecahedron',
    title: 'AIによる演習最適化',
    body: '志望校・正答率・進捗度をもとに、AIが取り組むべき内容を個別に設計。演習セットの自動生成へも順次拡張予定です。',
    badge: '拡張予定',
  },
  {
    shape: 'torus',
    title: '一問一答 高速マスター',
    body: '頻出知識をテンポよく反復できる、一問一答形式の高速復習機能を準備中です。',
    badge: '準備中',
  },
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
          カリキュラムに加えて、学習を継続しやすくするツールを取り揃えています。
        </Reveal>
        <motion.div
          className="pillars features-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {FEATURES.map((feature) => (
            <Tilt className="pillar" key={feature.title} variants={staggerItem}>
              <Icon3D shape={feature.shape} />
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
              {feature.badge && <span className="feature-badge">{feature.badge}</span>}
            </Tilt>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
