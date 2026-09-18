import { motion } from 'framer-motion'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { Reveal, staggerContainer, staggerItem } from '../components/Reveal'
import { Tilt } from '../components/Tilt'
import { FinalCta } from '../components/FinalCta'
import { INSTRUCTOR_CRITERIA } from '../data/content'
import { usePageMeta } from '../hooks/usePageMeta'

export function InstructorsPage() {
  usePageMeta({
    title: '代表・講師紹介',
    description:
      'MEDTHOD SCHOOLの指導方針と、講師の採用基準を紹介します。医学部編入試験の合格者による監修のもと、一定の学力基準と研修を通過した講師が指導します。',
    path: '/instructors',
  })

  return (
    <>
      <Breadcrumbs items={[{ path: '/', label: 'トップ' }, { path: '/instructors', label: '代表・講師紹介' }]} />
      <div className="page-lead">
        <div className="wrap">
          <h1>代表・講師紹介</h1>
        </div>
      </div>

      <section>
        <div className="wrap">
          <Reveal as="h2" className="section-title" style={{ textAlign: 'left' }}>
            監修者について
          </Reveal>
          <Reveal as="div" delay={0.1} className="prose">
            <p>
              MEDTHOD SCHOOLは、医学部学士編入試験に合格し、現在は医学部に在籍する監修者が、自身の受験経験をもとに学習の設計方針を監修しています。
            </p>
            <p>
              独学で受験対策を進める中で、「何から手をつければよいか分からない」「学習計画が正しいか判断できない」という悩みを実際に経験したことが、このサービスを始めた理由です。
              合格までに必要な学習範囲や優先順位を、遠回りせずに整理できる仕組みを作りたいと考え、学習管理と個別指導を組み合わせた形でサービスを設計しました。
            </p>
            <p>
              指導方針は、生徒ごとの現在地(学力・出身分野・確保できる勉強時間)と志望校の出題傾向を踏まえて、優先して取り組むべき学習内容を明確にすることです。
              AIによる分析や計画案の作成も活用しますが、生徒に公開する前に必ず監修者・講師が内容を確認します。
            </p>
          </Reveal>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <Reveal as="h2" className="section-title" style={{ textAlign: 'left' }}>
            講師の採用基準
          </Reveal>
          <Reveal as="p" className="section-lede" delay={0.1} style={{ textAlign: 'left', margin: '0 0 40px' }}>
            以下のいずれかの基準を満たし、指導マニュアルと研修を通過した人のみが指導を担当します。
          </Reveal>
          <motion.ul
            className="pain-list"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            {INSTRUCTOR_CRITERIA.map((item) => (
              <Tilt as="li" key={item} variants={staggerItem}>
                {item}
              </Tilt>
            ))}
          </motion.ul>
          <Reveal delay={0.15} as="p" className="ai-note">
            現時点で実際に在籍している講師の実名・出身大学・顔写真・合格実績は、本人の公開了承が得られ次第、順次掲載します。未掲載の期間中は、実在しない講師やプロフィールを掲載することはありません。
          </Reveal>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal as="h2" className="section-title" style={{ textAlign: 'left' }}>
            指導品質を保つ方法
          </Reveal>
          <Reveal as="div" delay={0.1} className="prose">
            <p>指導マニュアルと研修を通過した講師のみが担当します。</p>
            <p>AIが作成した週次計画案・分析結果は、生徒に公開する前に必ず講師・監修者が確認・調整します。</p>
            <p>学習計画・成績・進捗を学習管理システム上で一元管理し、指導内容が生徒ごとに個別最適化されているかを継続的に確認します。</p>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  )
}
