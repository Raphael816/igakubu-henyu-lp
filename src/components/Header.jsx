import { motion } from 'framer-motion'
import { CONSULT_URL } from '../constants'

export function Header() {
  return (
    <header className="site-header">
      <div className="wrap">
        <div className="logo">
          医学部編入<span>サポート</span>
        </div>
        <motion.a
          className="btn btn-header"
          href={CONSULT_URL}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
        >
          無料相談を予約する
        </motion.a>
      </div>
    </header>
  )
}
