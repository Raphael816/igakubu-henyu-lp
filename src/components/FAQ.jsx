import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Reveal } from './Reveal'

// TODO: 実際によく聞かれる質問・正式な解約規定が決まったら差し替える
const FAQS = [
  {
    q: 'オンラインだけで本当に対策できますか？',
    a: 'はい。学習プランの提供から個別相談まで、すべてオンラインで完結する設計にしています。',
  },
  {
    q: 'どんな人におすすめですか？',
    a: '仕事や学業を続けながら受験する方、文系出身で生命科学に不安がある方、独学で学習計画の管理に困っている方など、特に「何を・いつやるか」を一緒に整理してほしい方におすすめです。',
  },
  {
    q: 'コース・料金はどうなっていますか？',
    a: '1ヶ月・3ヶ月・6ヶ月の3コースからお選びいただけます(3ヶ月コースがおすすめ)。詳細は料金セクションをご覧ください。',
  },
  {
    q: '途中で解約・休会はできますか？',
    a: '契約開始から7日以内は全額返金いたします。それ以降の解約・休会・コース変更については、無料相談時にご案内します。',
  },
  {
    q: '無料相談はどんな内容ですか？',
    a: 'LINEで現在の状況を送っていただいたうえで日程調整し、オンラインで30分程度お話しします。相談だけで終了していただいても構いません。契約は必須ではありません。',
  },
  {
    q: '講師は誰が担当しますか？',
    a: '合格者による監修と、AIを活用した学習プラン作成を組み合わせてサポートします。',
  },
  {
    q: '学習データはどのように扱われますか？',
    a: '演習結果・志望校などの情報は、学習プラン作成のためだけに使用します。プラン文章の生成には外部のAIサービス(Anthropic社のClaude)を利用しており、保管はSupabase社のデータベース上で行っています。退会時のデータ削除については無料相談・お問い合わせ時にご案内します。',
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
