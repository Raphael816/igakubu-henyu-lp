import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Reveal } from './Reveal'
import { LineCta } from './CtaLink'
import { FAQS } from '../data/content'

function setJsonLd(id, data) {
  let el = document.getElementById(id)
  if (!el) {
    el = document.createElement('script')
    el.id = id
    el.type = 'application/ld+json'
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

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

export function FAQ({ items = FAQS, withJsonLd = true, withCta = false }) {
  useEffect(() => {
    if (!withJsonLd) return
    setJsonLd('faq-jsonld', {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: items.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    })
  }, [items, withJsonLd])

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
          {items.map((item) => (
            <FaqItem key={item.q} {...item} />
          ))}
        </div>
        {withCta && (
          <Reveal delay={0.1} className="faq-cta-row">
            <LineCta ctaId="line_faq" label="LINEで無料相談する" />
          </Reveal>
        )}
      </div>
    </section>
  )
}
