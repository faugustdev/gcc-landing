import { useI18n } from "../i18n/context"
import SectionHeading from "../components/SectionHeading"
import CodeBlock from "../components/CodeBlock"

const METHOD_CODES = [
  `# Via skills.sh
npx skills add faugustdev/git-context-controller`,
  `# Copy to your project
cp -r gcc/ your-project/.claude/skills/gcc/`,
  `# Clone and initialize
git clone https://github.com/faugustdev/git-context-controller.git
./scripts/gcc_init.sh /path/to/project/.GCC`,
]

const EXAMPLE_COMMANDS = ["COMMIT", "BRANCH", "MERGE", "CONTEXT"]

export default function QuickStart() {
  const { t } = useI18n()
  const methods = t("quickstart.methods")
  const examples = t("quickstart.examples")

  return (
    <section id="quickstart" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--color-brand-glow)_0%,transparent_40%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          tag={t("quickstart.tag")}
          title={t("quickstart.title")}
          description={t("quickstart.description")}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {methods.map((method, i) => (
            <div
              key={i}
              className="rounded-xl border border-(--color-border) bg-(--color-bg-card) overflow-hidden hover:border-(--color-border-accent) transition-all"
            >
              <div className="px-5 py-3 border-b border-(--color-border) flex items-center gap-3">
                <span className="text-sm font-semibold">{method.title}</span>
                {i === 0 && (
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-(--color-brand)/10 text-(--color-brand) border border-(--color-brand)/20">
                    {t("quickstart.recommended")}
                  </span>
                )}
              </div>
              <CodeBlock code={METHOD_CODES[i]} language="" showCopy />
            </div>
          ))}
        </div>

        {/* Natural language examples */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-center text-lg font-semibold mb-6">
            {t("quickstart.naturalLanguage")}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {examples.map((example, i) => (
              <div
                key={i}
                className="flex items-center justify-between px-5 py-3 rounded-lg border border-(--color-border) bg-(--color-bg-card)"
              >
                <code className="font-mono text-sm text-(--color-text-muted)">
                  {example.say}
                </code>
                <span className="font-mono text-xs font-bold text-(--color-brand)">
                  {EXAMPLE_COMMANDS[i]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
