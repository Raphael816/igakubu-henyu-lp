import { motion } from 'framer-motion'
import { Reveal, staggerContainer, staggerItem } from './Reveal'
import { Tilt } from './Tilt'

const STEPS = [
  { title: '無料相談(LINE)', body: '現在の状況・志望校・お悩みをお伺いします。' },
  { title: 'お申し込み・初回登録', body: '志望校や目標を登録し、学習をスタートします。' },
  { title: '週次演習', body: '毎週、演習の正答数・誤答数・間違えた単元を記録します。' },
  { title: 'AIがプラン案を作成', body: '演習結果と志望校をもとに、翌週の学習プラン案をAIが作成します。' },
  { title: '監修者が確認・公開', body: '合格者による監修者が内容を確認・調整してから公開します。' },
  { title: '翌週へ', body: '確定したプランで学習を進め、また演習結果を記録します。' },
]

export function HowItWorks() {
  return (
    <section id="how-it-works">
      <div className="wrap">
        <Reveal as="span" className="eyebrow-label">
          HOW IT WORKS
        </Reveal>
        <Reveal as="h2" className="section-title">
          利用の流れ
        </Reveal>
        <Reveal as="p" className="section-lede" delay={0.1}>
          無料相談から、毎週のプラン更新までの流れです。
        </Reveal>
        <motion.div
          className="steps"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {STEPS.map((step, i) => (
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
