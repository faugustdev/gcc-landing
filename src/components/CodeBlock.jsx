import { useState } from "react"

export default function CodeBlock({ code, language = "bash", showCopy = true }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group rounded-xl border border-(--color-border) bg-(--color-bg-card) overflow-hidden">
      {language && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-(--color-border) bg-(--color-bg)/50">
          <span className="text-xs font-mono text-(--color-text-dim)">{language}</span>
          {showCopy && (
            <button
              onClick={handleCopy}
              className="text-xs font-mono text-(--color-text-dim) hover:text-(--color-brand) transition-colors cursor-pointer"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          )}
        </div>
      )}
      <pre className="p-4 overflow-x-auto text-sm font-mono leading-relaxed text-(--color-text-muted)">
        <code>{code}</code>
      </pre>
    </div>
  )
}
