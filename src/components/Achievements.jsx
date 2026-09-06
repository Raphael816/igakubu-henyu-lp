import { motion } from 'framer-motion'
import { Reveal, staggerContainer, staggerItem } from './Reveal'

// 開始前のサービスなので、まだ存在しない合格実績・受講者数は載せない。
// ここに出すのは現時点で事実として言えることだけにする。
// TODO: モニター期間終了後、実績(合格者数など)が出たらこのセクションを差し替える
const STATS = [
  { value: '先着3名', label: 'モニター価格の募集枠' },
  { value: '毎週', label: 'AIが演習結果から学習プランを更新' },
  { value: '合格者', label: 'による個別監修体制' },
]

export function Achievements() {
  return (
    <section className="achievements">
      <div className="wrap">
        <motion.div
          className="stats"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {STATS.map((stat) => (
            <motion.div className="stat" key={stat.label} variants={staggerItem}>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
        <Reveal delay={0.1}>
          <p style={{ textAlign: 'center', marginTop: 20 }}>
            <span className="placeholder-note">
              TODO: モニター期間終了後、実際の合格実績が出たらこのセクションを差し替える(開始前のため未掲載)
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
