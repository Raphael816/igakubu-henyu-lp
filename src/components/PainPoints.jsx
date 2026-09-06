import { motion } from 'framer-motion'
import { Reveal, staggerContainer, staggerItem } from './Reveal'

const PAINS = [
  '何から手をつければいいか分からない',
  '独学だと、自分のやり方が正しいのか不安',
  '生命科学・小論文・面接、対策すべきことが多すぎる',
  '大手予備校は高額すぎる、近くに校舎がない',
  '相談できる合格者が身近にいない',
]

export function PainPoints() {
  return (
    <section className="alt">
      <div className="wrap">
        <Reveal as="h2" className="section-title">
          こんなお悩み、ありませんか？
        </Reveal>
        <Reveal as="p" className="section-lede" delay={0.1}>
          医学部学士編入を目指す方から、よくいただくお悩みです。
        </Reveal>
        <motion.ul
          className="pain-list"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {PAINS.map((pain) => (
            <motion.li key={pain} variants={staggerItem}>
              {pain}
            </motion.li>
          ))}
        </motion.ul>
        <p style={{ textAlign: 'center', marginTop: 20 }}>
          <span className="placeholder-note">
            TODO: この一覧はたたき台です。X(旧Twitter)の編入クラスタでのヒアリングで集めた「生の言葉」に差し替えてください
          </span>
        </p>
      </div>
    </section>
  )
}
