import logo from '../assets/icons/LOGO.svg'
import { useI18n } from '../i18n/context'
import { Reveal } from './Reveal'

export function Hero() {
  const { m } = useI18n()

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__grid" data-speed="clamp(0.96)" />
        <div className="hero__glow hero__glow--one" data-speed="clamp(0.9)" />
        <div className="hero__glow hero__glow--two" data-speed="clamp(1.05)" />
        <img
          className="hero__watermark"
          src={logo}
          alt=""
          width={340}
          height={426}
          data-speed="clamp(0.82)"
        />
      </div>

      <div className="atr-container hero__content">
        <Reveal delay={0}>
          <span className="hero__eyebrow">{m.hero.eyebrow}</span>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 id="hero-title" className="hero__title">
            {m.hero.titleLead}&nbsp;—{' '}
            <span className="hero__accent">{m.hero.titleAccent}</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="hero__desc">{m.hero.desc}</p>
        </Reveal>
      </div>
    </section>
  )
}