import { Link } from 'react-router-dom'
import { useSitePages } from '../context/SitePagesContext'

const STUDENT_LOGIN_URL = 'https://raphael816.github.io/medthod-app/'

const ALL_LINKS = [
  { to: '/service', label: 'サービス内容' },
  { to: '/courses', label: '料金' },
  { to: '/features', label: '生徒ページ' },
  { to: '/instructors', label: '指導方針' },
  { to: '/universities', label: '大学情報' },
  { to: '/column', label: '学習コラム' },
  { to: '/careers', label: '採用情報' },
  { to: '/consultation', label: '無料相談' },
  { to: '/faq', label: 'よくある質問' },
]

const LEGAL_LINKS = [
  { to: '/privacy', label: 'プライバシーポリシー' },
  { to: '/terms', label: '利用規約' },
  { to: '/commercial-law', label: '特定商取引法に基づく表記' },
]

export function Footer() {
  const { isVisible } = useSitePages()
  const LINKS = ALL_LINKS.filter((item) => isVisible(item.to))

  return (
    <footer>
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            MEDTHOD <span>SCHOOL</span>
          </div>
          <p className="footer-tagline">独学の迷いを、毎週の合格戦略に。</p>
          <p className="disclaimer">
            本サービスは医学部学士編入試験の学習支援を目的としたものであり、合格を保証するものではありません。
          </p>
        </div>
        <div className="footer-col">
          <p className="footer-col-title">サイトマップ</p>
          <ul>
            {LINKS.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-col">
          <p className="footer-col-title">法的表示・お問い合わせ</p>
          <ul>
            {LEGAL_LINKS.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link to="/consultation">お問い合わせ(LINE)</Link>
            </li>
            <li>
              <a href={STUDENT_LOGIN_URL} target="_blank" rel="noreferrer">
                生徒ログイン
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrap">
        <p className="copyright">&copy; 2026 MEDTHOD SCHOOL</p>
      </div>
    </footer>
  )
}
