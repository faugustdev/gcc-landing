import { useState } from "react"
import { useI18n } from "../i18n/context"
import CodeBlock from "../components/CodeBlock"

export default function Hero() {
  const { t } = useI18n()
  const [copied, setCopied] = useState(false)

  const installCmd = "npx skills add faugustdev/git-context-controller"

  const handleCopy = async () => {
    await navigator.clipboard.writeText(installCmd)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,var(--color-brand-glow)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(167,139,250,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        {/* Badge */}
        <a
          href="https://arxiv.org/abs/2508.00031"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-(--color-border) bg-(--color-bg-card) text-xs font-mono text-(--color-text-muted) hover:border-(--color-brand) hover:text-(--color-brand) transition-all mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-(--color-green) animate-pulse" />
          {t("hero.badge")}
        </a>

        {/* Main headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
          <span className="text-(--color-text)">{t("hero.title1")}</span>
          <br />
          <span className="bg-gradient-to-r from-(--color-brand) to-(--color-purple) bg-clip-text text-transparent">
            {t("hero.title2")}
          </span>
          <br />
          <span className="text-(--color-text)">{t("hero.title3")}</span>
        </h1>

        <p className="text-lg sm:text-xl text-(--color-text-muted) max-w-2xl mx-auto mb-10 leading-relaxed">
          {t("hero.description")}
          <span className="block mt-2 text-sm text-(--color-text-dim)">
            {t("hero.createdBy")}{" "}
            <a
              href="https://faugust.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-(--color-brand) hover:underline"
            >
              faugust
            </a>
          </span>
        </p>

        {/* Install command */}
        <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-(--color-border) bg-(--color-bg-card) hover:border-(--color-brand)/50 transition-all group cursor-pointer" onClick={handleCopy}>
          <span className="text-(--color-brand) font-mono text-sm">$</span>
          <code className="font-mono text-sm sm:text-base text-(--color-text-muted) group-hover:text-(--color-text) transition-colors">
            {installCmd}
          </code>
          <button
            onClick={(e) => { e.stopPropagation(); handleCopy() }}
            className="text-(--color-text-dim) hover:text-(--color-brand) transition-colors ml-2 cursor-pointer"
            aria-label="Copy install command"
          >
            {copied ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            )}
          </button>
        </div>

        <div className="flex items-center justify-center gap-6 mt-8">
          <a
            href="https://github.com/faugustdev/git-context-controller"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-(--color-brand) text-(--color-bg) font-semibold text-sm hover:shadow-[0_0_24px_var(--color-brand-glow)] hover:scale-105 transition-all"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            {t("hero.viewOnGithub")}
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-(--color-border) text-(--color-text-muted) font-semibold text-sm hover:border-(--color-border-accent) hover:text-(--color-text) transition-all"
          >
            {t("hero.learnMore")}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </a>
        </div>

        {/* Terminal preview */}
        <div className="mt-16 max-w-3xl mx-auto">
          <CodeBlock
            language="terminal"
            showCopy={false}
            code={t("hero.terminalCode")}
          />
        </div>
      </div>
    </section>
  )
}
