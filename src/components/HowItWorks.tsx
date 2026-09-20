import { Col, Row } from 'antd'
import { useI18n } from '../i18n/context'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function HowItWorks() {
  const { m } = useI18n()

  return (
    <section
      id="how-it-works"
      className="atr-section atr-section--alt how"
      aria-labelledby="how-title"
    >
      <div className="atr-container">
        <SectionHeading
          id="how-title"
          eyebrow={m.how.eyebrow}
          title={m.how.title}
          subtitle={m.how.subtitle}
        />

        <Row gutter={[18, 18]} className="how-steps" align="stretch">
          {m.how.steps.map((step, i) => (
            <Col xs={24} sm={12} lg={8} key={step.title}>
              <Reveal delay={i * 0.12} className="h-100">
                <article className="how-step">
                  <span className="how-step__number" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="how-step__title">{step.title}</h3>
                  <p className="how-step__text">{step.text}</p>
                </article>
              </Reveal>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  )
}