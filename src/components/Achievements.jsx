import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from './Reveal'
import { Tilt } from './Tilt'

// まだ実績数値(合格者数など)が出ていないサービスなので、事実として言えることだけを載せる。
// TODO: 卒業生の合格実績が出たら、このセクションを実績ベースの数値に差し替える
const STATS = [
  { value: 'オンライン', label: '完結・個別対応' },
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
            <Tilt className="stat" key={stat.label} variants={staggerItem}>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </Tilt>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
