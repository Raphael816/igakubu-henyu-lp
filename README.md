# 医学部学士編入サポート LP

React + Vite + framer-motion 製のランディングページ。無料相談への申し込みを取ることが目的で、決済機能は含みません。

公開URL: https://fbear0128.github.io/igakubu-henyu-lp/

## 開発

```bash
npm install
npm run dev
```

## 公開前TODO

- `src/constants.js` の `CONSULT_URL`: 実際の無料相談予約先(Googleフォーム/Calendlyなど)に差し替える
- `src/components/PainPoints.jsx`: X(旧Twitter)でのヒアリングで集めた生の悩みの声に差し替える
- `src/components/Mentor.jsx`: 監修者の実名・写真の公開可否を本人に確認のうえ差し替える
- `src/components/FAQ.jsx`: 実際によく聞かれる質問に差し替える

`main` ブランチへのpushで GitHub Actions が自動ビルド・デプロイします。
