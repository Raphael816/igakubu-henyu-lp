import { LineCta } from './CtaLink'

export function InlineCtaBanner({ ctaId, text }) {
  return (
    <div className="inline-cta-banner">
      <div className="wrap inline-cta-inner">
        <p>{text}</p>
        <LineCta ctaId={ctaId} />
      </div>
    </div>
  )
}
