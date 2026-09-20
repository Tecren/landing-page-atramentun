import { Button } from 'antd'
import { REGISTER_URL } from '../data/content'
import { useI18n } from '../i18n/context'
import { Reveal } from './Reveal'

export function FinalCta() {
  const { m } = useI18n()

  return (
    <section className="atr-section cta" aria-labelledby="cta-title">
      <div className="cta__glow" aria-hidden="true" />
      <div className="atr-container cta__inner">
        <Reveal>
          <span className="cta__eyebrow">{m.cta.eyebrow}</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 id="cta-title" className="cta__title">
            {m.cta.title}
          </h2>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="cta__actions">
            <Button
              className="atr-btn atr-btn--primary atr-btn--lg"
              type="primary"
              size="large"
              href={REGISTER_URL}
            >
              {m.cta.enter}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}