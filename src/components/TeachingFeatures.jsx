import { motion } from 'framer-motion'
import { Reveal, staggerContainer, staggerItem } from './Reveal'
import { Tilt } from './Tilt'
import { TEACHING_FEATURES } from '../data/content'

export function TeachingFeatures() {
  return (
    <section id="teaching">
      <div className="wrap">
        <Reveal as="span" className="eyebrow-label">
          TEACHING
        </Reveal>
        <Reveal as="h2" className="section-title">
          指導の特徴
        </Reveal>
        <Reveal as="p" className="section-lede" delay={0.1}>
          「個別管理量の多さ」で、遠回りを減らします。
        </Reveal>
        <motion.ul
          className="pain-list teaching-list"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {TEACHING_FEATURES.map((item) => (
            <Tilt as="li" key={item} variants={staggerItem}>
              {item}
            </Tilt>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
