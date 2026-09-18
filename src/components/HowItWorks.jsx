import { motion } from 'framer-motion'
import { Reveal, staggerContainer, staggerItem } from './Reveal'
import { Tilt } from './Tilt'
import { FLOW_STEPS } from '../data/content'

export function HowItWorks() {
  return (
    <section id="how-it-works">
      <div className="wrap">
        <Reveal as="span" className="eyebrow-label">
          HOW IT WORKS
        </Reveal>
        <Reveal as="h2" className="section-title">
          学習の流れ
        </Reveal>
        <Reveal as="p" className="section-lede" delay={0.1}>
          無料相談から、毎週の計画更新までの流れです。
        </Reveal>
        <motion.div
          className="steps"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {FLOW_STEPS.map((step, i) => (
            <Tilt className="step" key={step.title} variants={staggerItem}>
              <div className="step-num">{i + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </Tilt>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
