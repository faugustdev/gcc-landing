import { useI18n } from "../i18n/context"

const LANGS = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
]

export default function LanguageSwitcher() {
  const { locale, setLocale } = useI18n()

  return (
    <div className="flex items-center rounded-lg border border-(--color-border) overflow-hidden">
      {LANGS.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLocale(lang.code)}
          className={`px-2.5 py-1 text-xs font-mono font-semibold transition-all cursor-pointer ${
            locale === lang.code
              ? "bg-(--color-brand)/15 text-(--color-brand)"
              : "text-(--color-text-dim) hover:text-(--color-text-muted)"
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  )
}
