import type { ScrollSmoother } from 'gsap/ScrollSmoother'

let smoother: ScrollSmoother | null = null

export function setSmoother(instance: ScrollSmoother | null) {
  smoother = instance
}

export function scrollToTop() {
  if (smoother) smoother.scrollTo(0, true)
  else window.scrollTo({ top: 0, behavior: 'smooth' })
}

export function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const header = document.querySelector<HTMLElement>('.atr-header')
  const offset = header ? header.offsetHeight + 8 : 0
  if (smoother) {
    const y = Math.max(0, smoother.offset(el, 'top') - offset)
    smoother.scrollTo(y, true)
  } else {
    const y = Math.max(
      0,
      el.getBoundingClientRect().top + window.scrollY - offset,
    )
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}