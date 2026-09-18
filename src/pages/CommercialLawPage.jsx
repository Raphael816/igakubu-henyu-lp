import { Breadcrumbs } from '../components/Breadcrumbs'
import { usePageMeta } from '../hooks/usePageMeta'

const TODO = '運営者が入力'

const ROWS = [
  ['販売業者', TODO],
  ['運営責任者', TODO],
  ['所在地', TODO],
  ['電話番号', `${TODO}(請求があった場合に遅滞なく開示する運用も可)`],
  ['メールアドレス・お問い合わせ', 'LINE公式アカウントでの受付を予定(URL: 無料相談ページ参照)。メール窓口の要否は運営者が決定。'],
  ['販売価格', 'スタンダードプラン 月額98,000円(税込)/ プレミアムプラン 月額148,000円(税込)/ 合格伴走プラン 月額198,000円(税込)。入会金・教材費等の別途費用の有無は未確定(公開前確認事項)。'],
  ['商品代金以外の必要料金', TODO + '(入会金・教材費・通信費など、有無を確認のうえ記載)'],
  ['お支払い方法', TODO + '(決済方法・支払いサイクルは未確定)'],
  ['お支払い時期', TODO],
  ['サービス提供時期', TODO + '(初回相談から学習開始までの標準的な日数を記載)'],
  ['契約期間', TODO + '(最低契約期間の有無を含めて確認)'],
  ['返品・キャンセル(返金)について', TODO + '(返金条件は未確定。虚偽の条件を記載せず、確定次第反映する)'],
  ['解約について', TODO + '(解約の条件・手続き・違約金の有無を確認のうえ記載)'],
  ['休会について', TODO + '(休会の可否・条件を確認のうえ記載)'],
  ['動作環境', 'インターネット接続環境、および学習管理システムを利用できるWebブラウザ(スマートフォン・パソコン対応)。'],
]

export function CommercialLawPage() {
  usePageMeta({
    title: '特定商取引法に基づく表記',
    description: 'MEDTHOD SCHOOLの特定商取引法に基づく表記です。',
    path: '/commercial-law',
  })

  return (
    <>
      <Breadcrumbs items={[{ path: '/', label: 'トップ' }, { path: '/commercial-law', label: '特定商取引法に基づく表記' }]} />
      <div className="page-lead">
        <div className="wrap">
          <h1>特定商取引法に基づく表記</h1>
        </div>
      </div>
      <section>
        <div className="wrap">
          <div className="legal-todo">
            この表記は雛形です。「{TODO}」の項目は運営者による入力が必要です。月額料金を伴うオンラインサービスの表示として、公開前に弁護士など専門家の確認を受けることを推奨します。
          </div>
          <div className="table-wrap">
            <table className="legal-table">
              <tbody>
                {ROWS.map(([label, value]) => (
                  <tr key={label}>
                    <th>{label}</th>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}
