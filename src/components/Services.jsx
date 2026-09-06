import { motion } from 'framer-motion'
import { Reveal, staggerContainer, staggerItem } from './Reveal'

const PILLARS = [
  {
    title: '合格者監修のカリキュラム',
    body: '合格者の実体験に基づいた、遠回りしない学習設計。毎週の演習結果をもとに、次の一週間の優先順位を明確にします。',
  },
  {
    title: 'AIを活用した個別最適化',
    body: '週次の演習結果をAIが分析し、翌週の学習プラン案を自動生成。内容は必ず監修者が確認・調整してからお届けします。',
  },
  {
    title: '個別相談・伴走',
    body: '一人で抱え込ませない、定期的な壁打ちの機会をご用意。学習の進め方や不安なことをいつでも相談いただけます。',
  },
]

export function Services() {
  return (
    <section>
      <div className="wrap">
        <Reveal as="h2" className="section-title">
          サービス内容
        </Reveal>
        <Reveal as="p" className="section-lede" delay={0.1}>
          3つの柱で、遠回りしない編入対策を実現します。
        </Reveal>
        <motion.div
          className="pillars"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {PILLARS.map((pillar, i) => (
            <motion.div
              className="pillar"
              key={pillar.title}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="num">{i + 1}</div>
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
