import type { FeatureMeta } from '../data/content'
import { FEATURES_META } from '../data/content'
import { useI18n } from '../i18n/context'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

type FeatureCopy = {
  title: string
  lead: string
  description: string
  points: readonly string[]
  alt: string
}

type FeatureBlockProps = {
  feature: FeatureMeta
  copy: FeatureCopy
  flip: boolean
}

export function FeatureBlock({ feature, copy, flip }: FeatureBlockProps) {
  return (
    <Reveal className="feature-block-wrap">
      <article
        className={`feature-block feature-block--${feature.kind} ${
          flip ? 'feature-block--flip' : ''
        }`}
      >
        <div className="feature-media" data-speed="clamp(0.94)">
          <div className="feature-media__frame">
            <img
              src={feature.image}
              alt={copy.alt}
              width={feature.width}
              height={feature.height}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div className="feature-body">
          <span className="feature-body__index">
            {feature.index}
            <span className="feature-body__index-rule" />
          </span>
          <h3 className="feature-body__title">{copy.title}</h3>
          <p className="feature-body__lead">{copy.lead}</p>
          <p className="feature-body__desc">{copy.description}</p>
          <ul className="feature-body__points">
            {copy.points.map((point) => (
              <li key={point}>
                <span className="feature-body__dot" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Reveal>
  )
}

export function Features() {
  const { m } = useI18n()
  const sList = m.features.list

  const renderGroup = (metas: readonly FeatureMeta[], start: number) =>
    metas.map((meta, i) => {
      const copy = sList[meta.id]
      return (
        <FeatureBlock
          key={meta.id}
          feature={meta}
          copy={copy}
          flip={(start + i) % 2 === 1}
        />
      )
    })

  return (
    <section
      id="features"
      className="atr-section features"
      aria-labelledby="features-title"
    >
      <div className="atr-container">
        <SectionHeading
          id="features-title"
          eyebrow={m.features.eyebrow}
          title={m.features.title}
          subtitle={m.features.subtitle}
        />

        <div className="feature-grid">{renderGroup(FEATURES_META.slice(0, 3), 0)}</div>
        <div className="feature-grid">{renderGroup(FEATURES_META.slice(3), 3)}</div>
      </div>
    </section>
  )
}