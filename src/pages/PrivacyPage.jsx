import { Breadcrumbs } from '../components/Breadcrumbs'
import { usePageMeta } from '../hooks/usePageMeta'

export function PrivacyPage() {
  usePageMeta({
    title: 'プライバシーポリシー',
    description: 'MEDTHOD SCHOOLのプライバシーポリシーです。',
    path: '/privacy',
  })

  return (
    <>
      <Breadcrumbs items={[{ path: '/', label: 'トップ' }, { path: '/privacy', label: 'プライバシーポリシー' }]} />
      <div className="page-lead">
        <div className="wrap">
          <h1>プライバシーポリシー</h1>
        </div>
      </div>
      <section>
        <div className="wrap prose">
          <div className="legal-todo">
            個人情報を扱うオンラインサービスのため、公開前に専門家の確認を受けることを推奨します。
          </div>

          <h2>1. 事業者情報</h2>
          <p>運営事業者: 株式会社RODDIA</p>

          <h2>2. 取得する情報</h2>
          <p>本サービスは、無料相談・お申し込み・学習管理システムのご利用にあたり、以下のような情報を取得する場合があります。</p>
          <ul>
            <li>氏名・連絡先(LINEアカウント情報を含む)</li>
            <li>志望校・受験予定時期・学習経験などの相談内容</li>
            <li>学習管理システム上の学習記録(演習結果、教材・動画の閲覧履歴、成績など)</li>
          </ul>
          <p>お支払いは銀行振込のため、クレジットカード番号等の決済情報は取得しません。</p>

          <h2>3. 利用目的</h2>
          <ul>
            <li>無料相談・お申し込み対応のため</li>
            <li>学習計画の作成・指導・成績管理のため</li>
            <li>学習データの分析・週次計画案の作成など、AIによる補助機能の提供のため</li>
            <li>サービスに関するご連絡のため</li>
          </ul>

          <h2>4. 第三者提供・業務委託</h2>
          <p>本サービスは、以下の外部サービスを利用して運営しています。</p>
          <ul>
            <li>Anthropic社が提供するAI(Claude): 学習プラン案の作成補助に利用</li>
            <li>Supabase社が提供するデータベース・認証基盤: 学習データの保管に利用</li>
            <li>LINE公式アカウント: 無料相談・お問い合わせの受付に利用</li>
          </ul>
          <p>これら以外の外部サービスは、現時点では利用していません。</p>

          <h2>5. 開示・訂正・削除の請求</h2>
          <p>ご自身の情報の開示・訂正・削除をご希望の場合は、LINE公式アカウントよりお問い合わせください。お問い合わせいただいてから2週間以内を目安に対応いたします。</p>

          <h2>6. Cookie等の利用</h2>
          <p>現時点では、Cookie等を用いたアクセス解析ツールは導入していません。導入する場合は、本ポリシーを改定のうえ、利用目的・無効化方法を記載します。</p>

          <h2>7. お問い合わせ窓口</h2>
          <p>LINE公式アカウント: 無料相談ページ参照。現時点では、これ以外のお問い合わせ窓口はありません。</p>

          <h2>8. 改定</h2>
          <p>本ポリシーの内容は、必要に応じて改定することがあります。</p>
        </div>
      </section>
    </>
  )
}
