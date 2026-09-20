import type { CSSProperties } from 'react'
import logo from '../assets/icons/LOGO.svg'

type BrandLogoProps = {
  className?: string
}

export function BrandLogo({ className }: BrandLogoProps) {
  const mask = `url("${logo}")`
  const style: CSSProperties = {
    WebkitMaskImage: mask,
    maskImage: mask,
  }

  return (
    <span
      aria-hidden="true"
      className={['atr-brand__logo', className].filter(Boolean).join(' ')}
      style={style}
    />
  )
}