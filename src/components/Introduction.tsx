import { Col, Row } from 'antd'
import { INTRO_ICONS } from '../data/content'
import { useI18n } from '../i18n/context'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Introduction() {
  const { m } = useI18n()

  return (
    <section
      id="introduction"
      className="atr-section atr-section--alt introduction"
      aria-labelledby="introduction-title"
    >
      <div className="atr-container">
        <SectionHeading
          id="introduction-title"
          eyebrow={m.intro.eyebrow}
          title={m.intro.title}
          subtitle={m.intro.subtitle}
        />

        <Row gutter={[18, 18]} align="stretch">
          {m.intro.items.map((item, i) => (
            <Col xs={24} sm={12} lg={8} key={item.id}>
              <Reveal delay={i * 0.08} className="h-100">
                <article className="intro-card">
                  <span className="intro-card__icon">
                    <img src={INTRO_ICONS[item.id]} alt="" width={24} height={28} />
                  </span>
                  <h3 className="intro-card__title">{item.title}</h3>
                  <p className="intro-card__text">{item.text}</p>
                </article>
              </Reveal>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  )
}