import { createContext, useContext, useState, useCallback } from "react"
import { en } from "./en"
import { es } from "./es"

const translations = { en, es }
const STORAGE_KEY = "gcc-lang"

function getInitialLocale() {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored && translations[stored]) return stored
  const browserLang = navigator.language.slice(0, 2)
  return translations[browserLang] ? browserLang : "en"
}

const I18nContext = createContext()

export function I18nProvider({ children }) {
  const [locale, setLocaleState] = useState(getInitialLocale)

  const setLocale = useCallback((lang) => {
    setLocaleState(lang)
    localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang
  }, [])

  const t = useCallback(
    (key) => {
      const keys = key.split(".")
      let value = translations[locale]
      for (const k of keys) {
        value = value?.[k]
      }
      return value ?? key
    },
    [locale],
  )

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error("useI18n must be used within I18nProvider")
  return ctx
}
