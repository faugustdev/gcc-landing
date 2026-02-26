import { useI18n } from "../i18n/context"
import SectionHeading from "../components/SectionHeading"
import CodeBlock from "../components/CodeBlock"

const FILE_NAMES = [
  { name: "main.md", color: "text-(--color-brand)" },
  { name: "metadata.yaml", color: "text-(--color-yellow)" },
  { name: "commit.md", color: "text-(--color-green)" },
  { name: "log.md", color: "text-(--color-orange)" },
  { name: "branches/", color: "text-(--color-purple)" },
]

export default function Architecture() {
  const { t } = useI18n()
  const fileDescriptions = t("architecture.files")

  return (
    <section id="architecture" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(167,139,250,0.06)_0%,transparent_50%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          tag={t("architecture.tag")}
          title={t("architecture.title")}
          description={t("architecture.description")}
        />

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <CodeBlock
            language="structure"
            showCopy={false}
            code={`.GCC/
├── main.md            # Roadmap & objectives
├── metadata.yaml      # Project state & config
├── commit.md          # Commit history (main)
├── log.md             # OTA execution log (main)
└── branches/
    ├── feature-auth/
    │   ├── summary.md   # Branch purpose & status
    │   ├── commit.md    # Branch commits
    │   └── log.md       # Branch OTA log
    └── try-redis/
        ├── summary.md
        ├── commit.md
        └── log.md`}
          />

          <div className="space-y-4">
            {FILE_NAMES.map((file, i) => (
              <div
                key={file.name}
                className="p-4 rounded-lg border border-(--color-border) bg-(--color-bg-card) hover:border-(--color-border-accent) transition-all"
              >
                <div className="flex items-center gap-3 mb-1">
                  <code className={`font-mono text-sm font-semibold ${file.color}`}>
                    {file.name}
                  </code>
                </div>
                <p className="text-sm text-(--color-text-muted) leading-relaxed">
                  {fileDescriptions[i]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
