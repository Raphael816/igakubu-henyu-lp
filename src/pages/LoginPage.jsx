import { Breadcrumbs } from '../components/Breadcrumbs'
import { Reveal } from '../components/Reveal'
import { usePageMeta } from '../hooks/usePageMeta'

const STUDENT_LOGIN_URL = 'https://raphael816.github.io/medthod-app/'

export function LoginPage() {
  usePageMeta({
    title: '生徒ログイン',
    description: 'MEDTHOD SCHOOL在籍生の方はこちらから学習管理システムにログインしてください。',
    path: '/login',
  })

  return (
    <>
      <Breadcrumbs items={[{ path: '/', label: 'トップ' }, { path: '/login', label: '生徒ログイン' }]} />
      <div className="page-lead">
        <div className="wrap">
          <h1>生徒ログイン</h1>
        </div>
      </div>
      <section>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <Reveal as="p" className="section-lede" style={{ marginBottom: 32 }}>
            在籍生の方は、学習管理システムにログインして学習を進めてください。
          </Reveal>
          <a className="btn btn-primary" href={STUDENT_LOGIN_URL} target="_blank" rel="noreferrer">
            学習管理システムを開く
          </a>
          <p style={{ marginTop: 24, color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            アカウントをお持ちでない方、ログインでお困りの方は、LINE公式アカウントよりお問い合わせください。
          </p>
        </div>
      </section>
    </>
  )
}
