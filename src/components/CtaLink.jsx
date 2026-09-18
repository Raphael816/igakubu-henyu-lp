import { motion } from 'framer-motion'
import { LINE_URL } from '../constants'

// LINE無料相談への導線。data-cta にクリック位置の識別子を付け、将来の計測(GA等)に備える。
// 現時点ではアクセス解析IDが未設定のため、実際の送信は行わない(架空の計測IDは設定しない)。
export function LineCta({ ctaId, label = 'LINEで無料相談する', className = '', variant = 'solid' }) {
  return (
    <motion.a
      className={`btn btn-line ${variant === 'outline' ? 'btn-line-outline' : ''} ${className}`.trim()}
      href={LINE_URL}
      data-cta={ctaId}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
    >
      {label}
    </motion.a>
  )
}
