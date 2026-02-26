export default function SectionHeading({ tag, title, description }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      {tag && (
        <span className="inline-block font-mono text-xs tracking-widest uppercase text-(--color-brand) mb-4">
          {tag}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-(--color-text-muted) leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
