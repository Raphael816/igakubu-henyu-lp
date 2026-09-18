import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { LineCta } from './CtaLink'

const NAV = [
  { to: '/service', label: 'サービス内容' },
  { to: '/features', label: '生徒ページ' },
  { to: '/courses', label: '料金' },
  { to: '/instructors', label: '指導方針' },
  { to: '/universities', label: '大学情報' },
  { to: '/column', label: '学習コラム' },
  { to: '/faq', label: 'よくある質問' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="site-header">
      <div className="wrap">
        <Link to="/" className="logo" onClick={() => setOpen(false)}>
          MEDTHOD <span>SCHOOL</span>
        </Link>
        <nav className="site-nav">
          {NAV.map((item) => (
            <Link key={item.to} to={item.to} className={location.pathname === item.to ? 'active' : ''}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-right">
          <LineCta ctaId="line_header" className="btn-header" label={<HeaderCtaLabel />} />
          <button
            type="button"
            className="menu-toggle"
            aria-label={open ? 'メニューを閉じる' : 'メニューを開く'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
          >
            <div className="wrap">
              {NAV.map((item) => (
                <Link key={item.to} to={item.to} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              ))}
              <Link to="/login" onClick={() => setOpen(false)}>
                生徒ログイン
              </Link>
              <Link to="/consultation" onClick={() => setOpen(false)}>
                無料相談について
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

function HeaderCtaLabel() {
  return (
    <>
      <span className="full">LINEで無料相談する</span>
      <span className="short">無料相談</span>
    </>
  )
}
