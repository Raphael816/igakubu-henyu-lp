import { motion } from 'framer-motion'
import { Reveal, staggerContainer, staggerItem } from './Reveal'
import { Tilt } from './Tilt'
import { LEARNING_STAGES } from '../data/content'

export function LearningStages() {
  return (
    <section id="stages" className="alt">
      <div className="wrap">
        <Reveal as="span" className="eyebrow-label">
          LEARNING STAGES
        </Reveal>
        <Reveal as="h2" className="section-title">
          3段階で深まる学習設計
        </Reveal>
        <Reveal as="p" className="section-lede" delay={0.1}>
          学習管理システム上で、学力の段階に応じて3つの段階に分けて学習を進めます。
        </Reveal>
        <motion.div
          className="pillars stage-pillars"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {LEARNING_STAGES.map((stage, i) => (
            <Tilt className="pillar" key={stage.name} variants={staggerItem}>
              <div className="step-num">{i + 1}</div>
              <h3>{stage.name}</h3>
              <p className="stage-target">対象: {stage.target}</p>
              <p>{stage.body}</p>
            </Tilt>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
