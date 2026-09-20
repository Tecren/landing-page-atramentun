import { createContext, useContext } from 'react'
import type { I18nMessage, Language } from './messages'

const FALLBACK: Language = 'en'

export function detectLanguage(): Language {
  if (typeof navigator === 'undefined') return FALLBACK
  const code = navigator.language.toLowerCase()
  if (code.startsWith('pt')) return 'pt-BR'
  if (code.startsWith('es')) return 'es'
  if (code.startsWith('en')) return 'en'
  return FALLBACK
}

export type I18nContextValue = {
  lang: Language
  m: I18nMessage
}

export const I18nContext = createContext<I18nContextValue | null>(null)

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) {
    throw new Error('useI18n must be used inside LanguageProvider')
  }
  return ctx
}