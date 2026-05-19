const metrics = [
  { label: 'Open actions', value: '42', detail: '11 high risk' },
  { label: 'Leave approvals', value: '18', detail: '6 due today' },
  { label: 'Payroll blockers', value: '7', detail: '3 documents' },
  { label: 'New hires', value: '5', detail: '2 start this week' },
]

export function MetricStrip() {
  return (
    <section className="metric-strip" aria-label="Today metrics">
      {metrics.map((metric) => (
        <article className="metric-card" key={metric.label}>
          <span className="metric-card__label">{metric.label}</span>
          <strong>{metric.value}</strong>
          <span>{metric.detail}</span>
        </article>
      ))}
    </section>
  )
}
