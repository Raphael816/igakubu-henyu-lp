import { motion } from 'framer-motion'
import { LINE_URL } from '../constants'

export function Hero() {
  return (
    <section className="hero">
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
          独学の医学部編入対策、
          <br />
          その情報、本当に合っていますか？
        </motion.h1>
        <motion.p
          className="sub"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          合格者監修 × AIを使った、効率重視の医学部編入サポート。
          <br />
          オンライン完結・個別対応で、あなたの学習を伴走します。
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
