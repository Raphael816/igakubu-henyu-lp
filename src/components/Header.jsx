import { motion } from 'framer-motion'
import { LINE_URL } from '../constants'

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
          className="btn btn-line btn-header"
          href={LINE_URL}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
        >
          LINEで無料相談する
        </motion.a>
      </div>
    </header>
  )
}
