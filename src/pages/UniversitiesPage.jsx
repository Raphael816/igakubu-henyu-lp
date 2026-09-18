import { useState } from 'react'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { Reveal } from '../components/Reveal'
import { Tilt } from '../components/Tilt'
import { FinalCta } from '../components/FinalCta'
import { UNIVERSITY_PROFILES, UNIVERSITY_SOURCE } from '../data/universityProfiles'
import { usePageMeta } from '../hooks/usePageMeta'

function UniversityCard({ profile }) {
  const [open, setOpen] = useState(false)
  const preview = profile.summary.split('\n')[0]

  return (
    <Tilt className="university-card">
      <h3>{profile.name}</h3>
      <p className="university-preview">{preview}</p>
      {open && (
        <div className="university-full">
          {profile.summary
            .split('\n')
            .slice(1)
            .map((line, i) => (
              <p key={i}>{line}</p>
            ))}
        </div>
      )}
      <button type="button" className="btn btn-outline btn-sm" onClick={() => setOpen((v) => !v)}>
        {open ? '閉じる' : '対策のポイントを見る'}
      </button>
      <p className="university-source">
        情報源:{' '}
        <a href={profile.sourceUrl} target="_blank" rel="noreferrer">
          {UNIVERSITY_SOURCE.label}
        </a>
        (非公式) ・最終確認日: {UNIVERSITY_SOURCE.confirmedDate}
      </p>
    </Tilt>
  )
}

export function UniversitiesPage() {
  usePageMeta({
    title: '医学部編入 大学情報',
    description:
      '医学部学士編入試験を実施する大学の一覧と、大学別の出題傾向・対策ポイントを紹介。非公式情報のため、必ず各大学の公式発表もあわせてご確認ください。',
    path: '/universities',
  })

  return (
    <>
      <Breadcrumbs items={[{ path: '/', label: 'トップ' }, { path: '/universities', label: '大学情報' }]} />
      <div className="page-lead">
        <div className="wrap">
          <h1>医学部編入 大学情報</h1>
          <p>医学部学士編入試験を実施する大学の情報です。{UNIVERSITY_SOURCE.note}</p>
        </div>
      </div>
      <section>
        <div className="wrap">
          <Reveal as="p" className="section-lede" style={{ marginBottom: 40 }}>
            出願条件・試験科目・募集人数など詳細な項目別データベースは順次拡充します。まずは大学ごとの対策ポイントの要約からご覧いただけます。
          </Reveal>
          <div className="university-grid">
            {UNIVERSITY_PROFILES.map((profile) => (
              <UniversityCard key={profile.name} profile={profile} />
            ))}
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  )
}
