import { motion } from 'framer-motion'
import { Icon3D } from './Icon3D'
import { Reveal, staggerContainer, staggerItem } from './Reveal'
import { Tilt } from './Tilt'
import { SOLUTION_PILLARS } from '../data/content'

const SHAPES = ['icosahedron', 'tetrahedron', 'octahedron']

export function Solutions() {
  return (
    <section id="solutions">
      <div className="wrap">
        <Reveal as="span" className="eyebrow-label">
          OUR APPROACH
        </Reveal>
        <Reveal as="h2" className="section-title">
          MEDTHOD SCHOOLの解決方法
        </Reveal>
        <Reveal as="p" className="section-lede" delay={0.1}>
          「個別指導」「学習管理」「志望校戦略」の3本柱で、遠回りを減らします。
        </Reveal>
        <motion.div
          className="pillars"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {SOLUTION_PILLARS.map((pillar, i) => (
            <Tilt className="pillar" key={pillar.title} variants={staggerItem}>
              <Icon3D shape={SHAPES[i]} />
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
            </Tilt>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
