import { motion } from 'framer-motion'
import { Reveal, staggerContainer, staggerItem } from './Reveal'
import { Tilt } from './Tilt'

// TODO: X(旧Twitter)の編入クラスタでのヒアリングで集めた「生の言葉」があれば差し替える
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
        <Reveal as="span" className="eyebrow-label">
          CONCERNS
        </Reveal>
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
            <Tilt as="li" key={pain} variants={staggerItem}>
              {pain}
            </Tilt>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
