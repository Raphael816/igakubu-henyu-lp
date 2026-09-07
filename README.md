# MEDTHOD SCHOOL LP

React + Vite + framer-motion 製のランディングページ。無料相談への申し込みを取ることが目的で、決済機能は含みません。

支払いはStripeなどのオンライン決済を使わず、無料相談後にLINE公式アカウントの担当者が案内する銀行振込で行う運用方針(2026-09-07決定)。そのためLPやアプリに決済リンクを組み込む予定はない。

公開URL: https://fbear0128.github.io/igakubu-henyu-lp/

## 開発

```bash
npm install
npm run dev
```

## 公開前TODO

- `src/components/PainPoints.jsx`: X(旧Twitter)でのヒアリングで集めた生の悩みの声に差し替える
- `src/components/Mentor.jsx`: 監修者の実名・写真の公開可否を本人に確認のうえ差し替える
- `src/components/FAQ.jsx`: 実際によく聞かれる質問に差し替える
- `src/components/Achievements.jsx`: モニター期間終了後、実際の合格実績が出たら差し替える

`main` ブランチへのpushで GitHub Actions が自動ビルド・デプロイします。
