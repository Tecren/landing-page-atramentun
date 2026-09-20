import { useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { messages } from './messages'
import { detectLanguage, I18nContext } from './context'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang] = useState(detectLanguage)
  const value = useMemo(
    () => ({ lang, m: messages[lang] }),
    [lang],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}