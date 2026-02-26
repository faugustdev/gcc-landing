import { useI18n } from "../i18n/context"

export default function Footer() {
  const { t } = useI18n()

  return (
    <footer className="border-t border-(--color-border) py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* CTA */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            {t("footer.ctaTitle")}{" "}
            <span className="text-(--color-brand)">{t("footer.ctaHighlight")}</span>
          </h2>
          <p className="text-(--color-text-muted) mb-8 max-w-xl mx-auto">
            {t("footer.ctaDescription")}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://github.com/faugustdev/git-context-controller"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-(--color-brand) text-(--color-bg) font-semibold text-sm hover:shadow-[0_0_24px_var(--color-brand-glow)] hover:scale-105 transition-all"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              {t("footer.starOnGithub")}
            </a>
            <a
              href="https://arxiv.org/abs/2508.00031"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-(--color-border) text-(--color-text-muted) font-semibold text-sm hover:border-(--color-border-accent) hover:text-(--color-text) transition-all"
            >
              {t("footer.readPaper")}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-(--color-border)">
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold text-(--color-brand)">GCC</span>
            <span className="text-sm text-(--color-text-dim)">
              {t("footer.builtBy")}{" "}
              <a
                href="https://faugust.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-(--color-text-muted) hover:text-(--color-brand) transition-colors"
              >
                faugust
              </a>
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm text-(--color-text-dim)">
            <a
              href="https://faugust.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-(--color-text-muted) transition-colors"
            >
              faugust.com
            </a>
            <a
              href="https://github.com/faugustdev/git-context-controller"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-(--color-text-muted) transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://arxiv.org/abs/2508.00031"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-(--color-text-muted) transition-colors"
            >
              Paper
            </a>
            <span>MIT License</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
