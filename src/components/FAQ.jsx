import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Reveal } from './Reveal'

// TODO: 実際によく聞かれる質問があれば差し替える
const FAQS = [
  {
    q: 'オンラインだけで本当に対策できますか？',
    a: 'はい。学習プランの提供から個別相談まで、すべてオンラインで完結する設計にしています。',
  },
  {
    q: 'どんな人におすすめですか？',
    a: '理系・文系を問わず、医学部学士編入を目指す方全般にご利用いただけます。詳しくは無料相談でご状況をお伺いします。',
  },
  {
    q: '途中で解約はできますか？',
    a: 'ご契約内容の詳細は無料相談時にご説明します。',
  },
  {
    q: '講師は誰が担当しますか？',
    a: '合格者による監修と、AIを活用した学習プラン作成を組み合わせてサポートします。',
  },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        {q}
        <motion.span className="icon" animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.2 }}>
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <p className="faq-answer-inner">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQ() {
  return (
    <section id="faq" className="alt">
      <div className="wrap">
        <Reveal as="span" className="eyebrow-label">
          FAQ
        </Reveal>
        <Reveal as="h2" className="section-title">
          よくある質問
        </Reveal>
        <div className="faq">
          {FAQS.map((item) => (
            <FaqItem key={item.q} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
