import { LineCta } from './CtaLink'

// モバイル専用の固定CTA。CSS側で860px以上では非表示にする。
export function MobileStickyBar() {
  return (
    <div className="mobile-sticky-cta">
      <LineCta ctaId="line_mobile_sticky" label="LINEで無料相談する" className="btn-block" />
    </div>
  )
}
