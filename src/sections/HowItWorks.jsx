import { useI18n } from "../i18n/context"
import SectionHeading from "../components/SectionHeading"

const STEP_STYLES = [
  { number: "01", color: "text-(--color-green)", bg: "bg-(--color-green)/10", borderHover: "hover:border-(--color-green)/30" },
  { number: "02", color: "text-(--color-yellow)", bg: "bg-(--color-yellow)/10", borderHover: "hover:border-(--color-yellow)/30" },
  { number: "03", color: "text-(--color-brand)", bg: "bg-(--color-brand)/10", borderHover: "hover:border-(--color-brand)/30" },
]

export default function HowItWorks() {
  const { t } = useI18n()
  const steps = t("howItWorks.steps")

  return (
    <section id="how-it-works" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--color-brand-glow)_0%,transparent_50%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          tag={t("howItWorks.tag")}
          title={t("howItWorks.title")}
          description={t("howItWorks.description")}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((step, i) => {
            const style = STEP_STYLES[i]
            return (
              <div
                key={i}
                className={`relative p-8 rounded-xl border border-(--color-border) bg-(--color-bg-card) ${style.borderHover} transition-all group`}
              >
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-(--color-border)" />
                )}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${style.bg} mb-6`}>
                  <span className={`font-mono font-bold text-lg ${style.color}`}>{style.number}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-(--color-text-muted) leading-relaxed">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Cycle arrow illustration */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full border border-(--color-border) bg-(--color-bg-card) text-sm font-mono text-(--color-text-dim)">
            <span>{steps[0]?.title}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-(--color-brand)">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            <span>{steps[1]?.title}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-(--color-brand)">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            <span>{steps[2]?.title}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-(--color-purple)">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            <span className="text-(--color-text-muted)">log.md</span>
          </div>
        </div>
      </div>
    </section>
  )
}
