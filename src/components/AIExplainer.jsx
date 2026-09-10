import { motion } from 'framer-motion'
import { Reveal, staggerContainer, staggerItem } from './Reveal'
import { Tilt } from './Tilt'

const STEPS = [
  { label: 'AIが下書きを作成', body: '演習結果・志望校・過去のプランをもとに、AIが翌週のプラン案を作成します。' },
  { label: '監修者が確認・調整', body: '合格者による監修者が内容を確認し、必要に応じて修正します。' },
  { label: '生徒に公開', body: '確認・確定したプランだけが生徒に表示されます。AIの下書きがそのまま公開されることはありません。' },
]

export function AIExplainer() {
  return (
    <section id="ai-safety">
      <div className="wrap">
        <Reveal as="span" className="eyebrow-label">
          AI &amp; SAFETY
        </Reveal>
        <Reveal as="h2" className="section-title">
          AIの役割と安全性
        </Reveal>
        <Reveal as="p" className="section-lede" delay={0.1}>
          AI任せにせず、必ず合格者の目で確認してから公開します。
        </Reveal>
        <motion.div
          className="ai-steps"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {STEPS.map((step) => (
            <Tilt className="ai-step" key={step.label} variants={staggerItem}>
              <div className="ai-step-label">{step.label}</div>
              <p>{step.body}</p>
            </Tilt>
          ))}
        </motion.div>
        <Reveal delay={0.2} as="p" className="ai-note">
          演習結果・志望校などの学習データは、プラン作成のためだけに利用します。
        </Reveal>
      </div>
    </section>
  )
}
