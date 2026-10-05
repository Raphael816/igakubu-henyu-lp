import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { usePageMeta } from '../hooks/usePageMeta'
import { getPublishedJob, submitJobApplication } from '../lib/siteApi'

const EMAIL_PATTERN = /^[^@\s]+@[^@\s]+\.[^@\s]+$/

function ApplyForm({ jobId }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [done, setDone] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    if (!form.name.trim()) {
      setError('お名前を入力してください。')
      return
    }
    if (!EMAIL_PATTERN.test(form.email.trim())) {
      setError('メールアドレスの形式が正しくありません。')
      return
    }
    setSubmitting(true)
    setError('')
    try {
      await submitJobApplication({
        jobPostingId: jobId,
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        message: form.message.trim(),
      })
      setDone(true)
    } catch {
      setError('送信に失敗しました。通信環境をご確認のうえ、もう一度お試しください。')
    }
    setSubmitting(false)
  }

  if (done) {
    return (
      <div className="apply-form apply-success">
        <h2>応募を受け付けました</h2>
        <p>ご応募ありがとうございます。内容を確認のうえ、ご連絡先までご連絡いたします。</p>
      </div>
    )
  }

  return (
    <form className="apply-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="apply-name">お名前<span className="required">必須</span></label>
        <input id="apply-name" type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
      </div>
      <div className="form-group">
        <label htmlFor="apply-email">メールアドレス<span className="required">必須</span></label>
        <input id="apply-email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
      </div>
      <div className="form-group">
        <label htmlFor="apply-phone">電話番号(任意)</label>
        <input id="apply-phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
      </div>
      <div className="form-group">
        <label htmlFor="apply-message">自己PR・お問い合わせ内容(任意)</label>
        <textarea id="apply-message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
      </div>
      {error && <p className="form-message" style={{ color: '#b3261e' }}>{error}</p>}
      <button type="submit" className="btn btn-primary btn-block" disabled={submitting}>
        {submitting ? '送信中...' : '応募する'}
      </button>
    </form>
  )
}

export function CareerDetailPage() {
  const { jobId } = useParams()
  const [job, setJob] = useState(null)
  const [notFound, setNotFound] = useState(false)

  usePageMeta({
    title: job ? job.title : '採用情報',
    description: job?.summary || 'MEDTHOD SCHOOLの採用情報です。',
    path: `/careers/${jobId}`,
  })

  useEffect(() => {
    let cancelled = false
    getPublishedJob(jobId)
      .then((row) => {
        if (cancelled) return
        if (!row) setNotFound(true)
        else setJob(row)
      })
      .catch(() => {
        if (!cancelled) setNotFound(true)
      })
    return () => {
      cancelled = true
    }
  }, [jobId])

  if (notFound) {
    return (
      <>
        <Breadcrumbs items={[{ path: '/', label: 'トップ' }, { path: '/careers', label: '採用情報' }]} />
        <div className="page-lead">
          <div className="wrap">
            <h1>求人が見つかりません</h1>
            <p>募集が終了しているか、URLが正しくない可能性があります。</p>
          </div>
        </div>
      </>
    )
  }

  if (!job) return <p className="empty-state">読み込み中...</p>

  return (
    <>
      <Breadcrumbs items={[{ path: '/', label: 'トップ' }, { path: '/careers', label: '採用情報' }, { path: `/careers/${jobId}`, label: job.title }]} />
      <div className="page-lead">
        <div className="wrap">
          {job.employment_type && <p className="job-type">{job.employment_type}</p>}
          <h1>{job.title}</h1>
          {job.summary && <p>{job.summary}</p>}
        </div>
      </div>
      <section>
        <div className="wrap" style={{ maxWidth: 'var(--content-width)', margin: '0 auto' }}>
          {job.description && (
            <div className="job-detail-section">
              <h2>仕事内容</h2>
              <p>{job.description}</p>
            </div>
          )}
          {job.requirements && (
            <div className="job-detail-section">
              <h2>応募要件</h2>
              <p>{job.requirements}</p>
            </div>
          )}
        </div>
      </section>
      <section>
        <div className="wrap">
          <ApplyForm jobId={job.id} />
        </div>
      </section>
    </>
  )
}
