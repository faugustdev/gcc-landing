import { useState } from "react"
import { useI18n } from "../i18n/context"
import SectionHeading from "../components/SectionHeading"
import CodeBlock from "../components/CodeBlock"

const CMD_STYLES = [
  {
    name: "COMMIT",
    color: "text-(--color-green)",
    bg: "bg-(--color-green)/10",
    border: "border-(--color-green)/30",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="4" />
        <line x1="1.05" y1="12" x2="7" y2="12" />
        <line x1="17.01" y1="12" x2="22.96" y2="12" />
      </svg>
    ),
    triggers: ["/gcc commit", "save this", "checkpoint"],
    code: `[GCC] COMMIT [C003]: Add authentication middleware

  Branch: main
  Purpose: Build REST API with auth
  Previous: Implemented user model and routes
  Contribution:
    - Created auth middleware with JWT validation
    - Added protected route decorator
    - Updated user routes with auth guards
  Files: middleware/auth.js, routes/users.js`,
  },
  {
    name: "BRANCH",
    color: "text-(--color-purple)",
    bg: "bg-(--color-purple)/10",
    border: "border-(--color-purple)/30",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="6" y1="3" x2="6" y2="15" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M18 9a9 9 0 0 1-9 9" />
      </svg>
    ),
    triggers: ["/gcc branch", "try alternative", "experiment with"],
    code: `[GCC] BRANCH: try-redis-cache
  Purpose: Evaluate Redis for session caching
  Parent: main
  Hypotheses:
    - Redis reduces DB queries by ~60%
    - Session lookup drops to <5ms

  Created: .GCC/branches/try-redis-cache/
    \u251C\u2500\u2500 summary.md
    \u251C\u2500\u2500 commit.md
    \u2514\u2500\u2500 log.md`,
  },
  {
    name: "MERGE",
    color: "text-(--color-orange)",
    bg: "bg-(--color-orange)/10",
    border: "border-(--color-orange)/30",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="18" cy="18" r="3" />
        <circle cx="6" cy="6" r="3" />
        <path d="M6 21V9a9 9 0 0 0 9 9" />
      </svg>
    ),
    triggers: ["/gcc merge", "integrate results", "branch is done"],
    code: `[GCC] MERGE: try-redis-cache -> main
  Status: merged

  Synthesis:
    - Redis confirmed 58% reduction in DB queries
    - Session lookup: 3ms avg (from 45ms)
    - Integrated: redis.js, session middleware
    - Updated: main.md milestone M4

  Branch try-redis-cache: archived`,
  },
  {
    name: "CONTEXT",
    color: "text-(--color-brand)",
    bg: "bg-(--color-brand)/10",
    border: "border-(--color-brand)/30",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    triggers: ["/gcc context", "where were we?", "show history"],
    code: `> /gcc context --full

[GCC] Reading main.md...

  Project: REST API with authentication
  Milestones:
    M1: Express server + User model
    M2: Authentication middleware (JWT)
    M3: SQLite integration
    M4: Redis session caching (merged)

  Active branches: rate-limiter
  Remaining: Error handling, deployment

  Ready to continue.`,
  },
]

export default function Commands() {
  const { t } = useI18n()
  const [active, setActive] = useState(0)
  const style = CMD_STYLES[active]
  const items = t("commands.items")

  return (
    <section id="commands" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          tag={t("commands.tag")}
          title={t("commands.title")}
          description={t("commands.description")}
        />

        {/* Command tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {CMD_STYLES.map((c, i) => (
            <button
              key={c.name}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-mono text-sm font-semibold border transition-all cursor-pointer ${
                i === active
                  ? `${c.bg} ${c.border} ${c.color}`
                  : "border-(--color-border) text-(--color-text-dim) hover:text-(--color-text-muted) hover:border-(--color-border-accent)"
              }`}
            >
              {c.icon}
              {c.name}
            </button>
          ))}
        </div>

        {/* Active command detail */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h3 className={`text-2xl font-bold mb-4 ${style.color}`}>
              {style.name}
            </h3>
            <p className="text-(--color-text-muted) leading-relaxed mb-6">
              {items[active]?.description}
            </p>
            <div>
              <span className="text-xs font-mono text-(--color-text-dim) uppercase tracking-wider mb-2 block">
                {t("commands.triggersLabel")}
              </span>
              <div className="flex flex-wrap gap-2">
                {style.triggers.map((tr) => (
                  <span
                    key={tr}
                    className="px-3 py-1 rounded-md bg-(--color-bg-card) border border-(--color-border) font-mono text-xs text-(--color-text-muted)"
                  >
                    {tr}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <CodeBlock language="output" code={style.code} showCopy={false} />
        </div>
      </div>
    </section>
  )
}
