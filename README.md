# MEDTHOD SCHOOL 公式サイト

React + Vite + React Router + framer-motion 製の公式サイト。医学部学士編入試験を目指す個別伴走塾の紹介サイトで、LINE無料相談への申し込みを取ることが最終目標。決済機能は含まない。

支払いはStripeなどのオンライン決済を使わず、無料相談後にLINE公式アカウントの担当者が案内する銀行振込で行う運用方針(2026-09-07決定)。そのためサイトに決済リンクを組み込む予定はない。

公開URL: https://raphael816.github.io/igakubu-henyu-lp/

GitHub Pagesの静的ホスティング上でも通常のパス(例: `/courses`)でアクセス・SEOできるよう、`react-router-dom`の`BrowserRouter`+ `public/404.html`のリダイレクト技法([spa-github-pages](https://github.com/rafgraph/spa-github-pages)方式)を使っている。`index.html`側に対になる復元スクリプトがある。

## ページ構成

`/`(トップ), `/service`, `/courses`, `/features`, `/instructors`, `/universities`, `/column`, `/consultation`, `/faq`, `/login`(生徒ログインへのリンク), `/privacy`, `/terms`, `/commercial-law`。

コピーやサービス内容・料金プランは `src/data/content.js` に集約。大学別の対策ポイントは `src/data/universityProfiles.js`(出典: 医学部学士編入塾Cell、非公式情報)。

## 開発

```bash
npm install
npm run dev
```

## 公開前TODO(未確定・要確認事項)

- `src/pages/CommercialLawPage.jsx` / `TermsPage.jsx` / `PrivacyPage.jsx`: 「運営者が入力」の項目(運営者名・住所・連絡先・決済方法・契約期間・解約/休会/返金条件など)を確定し、公開前に弁護士等の専門家確認を受ける
- `src/data/content.js` の `UNDETERMINED_TERMS`: 授業時間・質問対応回数・添削無制限の条件・入会金・教材費などが事業計画上まだ未確定
- `src/pages/InstructorsPage.jsx`: 実際に在籍する講師の実名・出身大学・顔写真・合格実績は、本人の公開了承が得られ次第、順次掲載する(架空の講師は掲載しない)
- `src/pages/UniversitiesPage.jsx`: 現在は大学ごとの対策ポイント(自由記述の要約)のみ。出願条件・試験科目・募集人数などの項目別データベース化は今後の拡張
- `src/pages/ColumnPage.jsx`: 学習コラムは未執筆。カテゴリ一覧のみ表示している
- アクセス解析(GA4等)は未導入。CTAには`data-cta`属性(例: `line_hero`, `line_standard`)を付与済みなので、導入時はこれをイベント名としてそのまま使える

`main` ブランチへのpushで GitHub Actions が自動ビルド・デプロイします。
