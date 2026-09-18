import { motion } from 'framer-motion'
import { Reveal, staggerContainer, staggerItem } from './Reveal'
import { Tilt } from './Tilt'

const AI_ROLES = ['学習データの整理', '成績・弱点分析', '週次計画案の作成', '復習候補の抽出', '問題生成の補助']

export function AIExplainer() {
  return (
    <section id="ai-safety">
      <div className="wrap">
        <Reveal as="span" className="eyebrow-label">
          AI &amp; SAFETY
        </Reveal>
        <Reveal as="h2" className="section-title">
          AIと講師の役割分担
        </Reveal>
        <Reveal as="p" className="section-lede" delay={0.1}>
          MEDTHOD SCHOOLは「AIが指導する塾」ではなく、講師が指導する塾です。AIは以下の作業を支援する補助機能として利用します。
        </Reveal>
        <motion.ul
          className="pain-list ai-role-list"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {AI_ROLES.map((role) => (
            <Tilt as="li" key={role} variants={staggerItem}>
              {role}
            </Tilt>
          ))}
        </motion.ul>
        <Reveal delay={0.2} as="p" className="ai-note">
          AIが作成した週次計画案・分析結果は、そのまま生徒に公開しません。必ず講師または監修者が内容を確認・調整してからお届けします。
        </Reveal>
      </div>
    </section>
  )
}
