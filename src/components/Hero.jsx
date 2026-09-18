import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Scene3D } from './Scene3D'
import { LineCta } from './CtaLink'
import { CONFIRMED_BADGES } from '../data/content'

const HERO_FACTS = ['医学部学士編入 専門', '完全オンライン', '英語・生命科学に対応', '個別学習計画', '答案添削', '志望校・面接対策']

export function Hero() {
  return (
    <section className="hero">
      <Scene3D />
      <div className="hero-glow" />
      <div className="wrap">
        <motion.div className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          医学部学士編入 個別伴走塾
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
          独学の迷いを、
          <br />
          毎週の合格戦略に。
        </motion.h1>
        <motion.p className="sub" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          英語・生命科学の個別指導から、学習計画、答案添削、志望校選定、面接対策まで。
          <br />
          医学部編入合格に必要な学習を、一人ひとりの現在地から設計します。
        </motion.p>
        <motion.ul
          className="hero-facts"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
        >
          {HERO_FACTS.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </motion.ul>
        <motion.div
          className="hero-cta-row"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.34 }}
        >
          <LineCta ctaId="line_hero" />
          <Link to="/features" className="btn btn-outline">
            実際の生徒画面を見る
          </Link>
        </motion.div>
        <motion.ul
          className="hero-badges"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {CONFIRMED_BADGES.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
