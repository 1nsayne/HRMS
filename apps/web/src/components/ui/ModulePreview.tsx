import type { ReactNode } from 'react'

type ModulePreviewProps = {
  eyebrow: string
  title: string
  description: string
  stats: Array<{
    label: string
    value: string
  }>
  children?: ReactNode
}

export function ModulePreview({
  children,
  description,
  eyebrow,
  stats,
  title,
}: ModulePreviewProps) {
  return (
    <section className="module-page">
      <header className="page-header">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="muted">{description}</p>
        </div>
        <div className="lens-controls">
          <button className="button button--primary" type="button">
            Create
          </button>
          <button className="button" type="button">
            Export
          </button>
        </div>
      </header>

      <div className="module-stats">
        {stats.map((stat) => (
          <article className="metric-card" key={stat.label}>
            <span className="metric-card__label">{stat.label}</span>
            <strong>{stat.value}</strong>
          </article>
        ))}
      </div>

      <div className="module-layout">{children}</div>
    </section>
  )
}
