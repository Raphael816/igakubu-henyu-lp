import { motion } from 'framer-motion'
import { Reveal, staggerContainer, staggerItem } from './Reveal'
import { Tilt } from './Tilt'
import { LineCta } from './CtaLink'
import { CONSULTATION_TOPICS } from '../data/content'

export function ConsultationInfo({ ctaId = 'line_final' }) {
  return (
    <section id="consultation">
      <div className="wrap">
        <Reveal as="span" className="eyebrow-label">
          FREE CONSULTATION
        </Reveal>
        <Reveal as="h2" className="section-title">
          無料相談で整理できること
        </Reveal>
        <Reveal as="p" className="section-lede" delay={0.1}>
          無料相談は、営業のための面談ではなく、以下を一緒に整理する機会です。
        </Reveal>
        <motion.ul
          className="pain-list consultation-list"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {CONSULTATION_TOPICS.map((topic) => (
            <Tilt as="li" key={topic} variants={staggerItem}>
              {topic}
            </Tilt>
          ))}
        </motion.ul>
        <Reveal delay={0.15} as="p" className="ai-note">
          相談の中で、簡単な学習の方向性や当面の進め方の目安をご提案します。ただし、無料相談だけで詳細な年間カリキュラムをすべてお渡しするものではありません。契約は必須ではなく、相談のみのご利用も可能です。
        </Reveal>
        <Reveal delay={0.2} className="consultation-cta-row">
          <LineCta ctaId={ctaId} label="自分に必要な学習を相談する" />
        </Reveal>
      </div>
    </section>
  )
}
