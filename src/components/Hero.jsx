import { motion } from 'framer-motion'
import { LINE_URL } from '../constants'
import { Scene3D } from './Scene3D'

export function Hero() {
  return (
    <section className="hero">
      <Scene3D />
      <div className="hero-glow" />
      <div className="wrap">
        <motion.div
          className="eyebrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          医学部学士編入 個別サポート
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          独学の迷いを、
          <br />
          毎週の合格戦略に。
        </motion.h1>
        <motion.p
          className="sub"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          合格者とAIが、志望校から逆算した学習計画を毎週作成。
          <br />
          何をすべきか迷わない、オンライン完結の伴走サポートです。
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.a
            className="btn btn-line"
            href={LINE_URL}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            LINEで無料相談する
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
