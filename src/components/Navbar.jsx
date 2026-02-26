import { useState, useEffect } from "react"
import { useI18n } from "../i18n/context"
import LanguageSwitcher from "./LanguageSwitcher"

export default function Navbar() {
  const { t } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: t("nav.problem"), href: "#problem" },
    { label: t("nav.howItWorks"), href: "#how-it-works" },
    { label: t("nav.commands"), href: "#commands" },
    { label: t("nav.architecture"), href: "#architecture" },
    { label: t("nav.quickstart"), href: "#quickstart" },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-(--color-bg)/80 backdrop-blur-xl border-b border-(--color-border)"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="font-mono font-bold text-xl text-(--color-brand) group-hover:drop-shadow-[0_0_8px_var(--color-brand)] transition-all">
            GCC
          </span>
          <span className="text-(--color-text-dim) text-sm hidden sm:inline">
            Git Context Controller
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-(--color-text-muted) hover:text-(--color-text) transition-colors"
            >
              {link.label}
            </a>
          ))}
          <LanguageSwitcher />
          <a
            href="https://github.com/faugustdev/git-context-controller"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium px-4 py-2 rounded-lg bg-(--color-bg-card) border border-(--color-border) hover:border-(--color-brand) text-(--color-text) transition-all"
          >
            GitHub
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-(--color-text-muted) hover:text-(--color-text) p-2"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-(--color-bg)/95 backdrop-blur-xl border-b border-(--color-border) px-6 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-sm text-(--color-text-muted) hover:text-(--color-text) transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-4 mt-3">
            <LanguageSwitcher />
            <a
              href="https://github.com/faugustdev/git-context-controller"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-(--color-brand)"
            >
              GitHub
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
