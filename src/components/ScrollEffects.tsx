import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { setSmoother } from '../lib/scroll'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

export function ScrollEffects() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const desktop = window.matchMedia('(min-width: 768px)').matches

    let smoother: ScrollSmoother | null = null
    if (!reduced && desktop) {
      smoother = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1,
        effects: true,
        smoothTouch: 0.1,
      })
      setSmoother(smoother)
    }

    const scrolledTrigger = ScrollTrigger.create({
      start: 80,
      end: 'max',
      onUpdate: (self) => {
        document.body.classList.toggle('atr-scrolled', self.scroll() > 80)
      },
    })

    return () => {
      scrolledTrigger.kill()
      smoother?.kill()
      setSmoother(null)
    }
  }, [])

  return null
}