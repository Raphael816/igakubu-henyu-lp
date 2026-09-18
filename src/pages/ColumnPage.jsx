import { Breadcrumbs } from '../components/Breadcrumbs'
import { Reveal } from '../components/Reveal'
import { FinalCta } from '../components/FinalCta'
import { usePageMeta } from '../hooks/usePageMeta'

const CATEGORIES = [
  '医学部編入の始め方',
  '独学',
  '生命科学',
  '英語',
  '化学・物理・数学',
  '小論文',
  '志望理由書',
  '面接',
  '大学選び',
  '社会人受験',
  '勉強計画',
  '教材・参考書',
  '大学別対策',
]

export function ColumnPage() {
  usePageMeta({
    title: '学習コラム',
    description: '医学部学士編入試験の勉強法・志望校選び・面接対策などを扱う学習コラムです。準備が整い次第、記事を順次公開します。',
    path: '/column',
  })

  return (
    <>
      <Breadcrumbs items={[{ path: '/', label: 'トップ' }, { path: '/column', label: '学習コラム' }]} />
      <div className="page-lead">
        <div className="wrap">
          <h1>学習コラム</h1>
          <p>医学部学士編入試験に関する学習コラムを準備しています。公開までの間は、扱う予定のカテゴリのみご案内します。</p>
        </div>
      </div>
      <section>
        <div className="wrap">
          <Reveal as="p" className="section-lede" style={{ marginBottom: 32 }}>
            近日公開予定のカテゴリ
          </Reveal>
          <ul className="column-category-list">
            {CATEGORIES.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </section>
      <FinalCta />
    </>
  )
}
