import { Reveal } from './Reveal'

type SectionHeadingProps = {
  id?: string
  eyebrow: string
  title: string
  subtitle?: string
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <Reveal className="section-head">
      <span className="section-head__eyebrow">{eyebrow}</span>
      <h2 className="section-head__title" id={id}>
        {title}
      </h2>
      {subtitle ? <p className="section-head__subtitle">{subtitle}</p> : null}
    </Reveal>
  )
}