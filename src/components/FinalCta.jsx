import { motion } from 'framer-motion'
import { Reveal } from './Reveal'
import { LINE_URL } from '../constants'
import { Scene3D } from './Scene3D'

export function FinalCta() {
  return (
    <section id="cta">
      <div className="wrap">
        <Reveal className="cta-final">
          <Scene3D />
          <div className="cta-final-content">
            <h2>まずは無料相談から</h2>
            <p>現在の状況やお悩み、志望校についてお伺いします。無理な勧誘は一切いたしません。</p>
            <motion.a
              className="btn btn-line"
              href={LINE_URL}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              LINEで無料相談する
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
