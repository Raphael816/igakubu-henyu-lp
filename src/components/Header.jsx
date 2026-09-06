import { motion } from 'framer-motion'
import { CONSULT_URL } from '../constants'

export function Header() {
  return (
    <header className="site-header">
      <div className="wrap">
        <div className="logo">
          MEDTHOD <span>SCHOOL</span>
        </div>
        <nav className="site-nav">
          <a href="#services">サービス内容</a>
          <a href="#mentor">監修者紹介</a>
          <a href="#pricing">料金</a>
          <a href="#faq">よくある質問</a>
        </nav>
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
