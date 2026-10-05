import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { FinalCta } from '../components/FinalCta'
import { usePageMeta } from '../hooks/usePageMeta'
import { listPublishedJobs } from '../lib/siteApi'

export function CareersPage() {
  usePageMeta({
    title: '採用情報',
    description: 'MEDTHOD SCHOOLの採用情報です。現在募集中のポジションをご紹介します。',
    path: '/careers',
  })

  const [jobs, setJobs] = useState(null)

  useEffect(() => {
    let cancelled = false
    listPublishedJobs()
      .then((rows) => {
        if (!cancelled) setJobs(rows)
      })
      .catch(() => {
        if (!cancelled) setJobs([])
      })
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <>
      <Breadcrumbs items={[{ path: '/', label: 'トップ' }, { path: '/careers', label: '採用情報' }]} />
      <div className="page-lead">
        <div className="wrap">
          <h1>採用情報</h1>
          <p>MEDTHOD SCHOOLでは、ともに医学部編入を目指す受験生を支える仲間を募集しています。</p>
        </div>
      </div>
      <section>
        <div className="wrap">
          {jobs === null ? (
            <p className="empty-state">読み込み中...</p>
          ) : jobs.length === 0 ? (
            <p className="empty-state">現在募集中のポジションはありません。</p>
          ) : (
            <div className="job-grid">
              {jobs.map((j) => (
                <div className="job-card" key={j.id}>
                  {j.employment_type && <p className="job-type">{j.employment_type}</p>}
                  <h3>{j.title}</h3>
                  <p>{j.summary}</p>
                  <Link to={`/careers/${j.id}`} className="btn btn-outline btn-sm">
                    詳細を見る・応募する
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <FinalCta />
    </>
  )
}
