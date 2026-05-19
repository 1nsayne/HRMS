const pulseItems = [
  {
    label: 'Payroll readiness',
    value: '86%',
    detail: 'Contract and attendance checks still open',
    tone: 'warning',
  },
  {
    label: 'Onboarding health',
    value: '5/7',
    detail: 'Two new hires need account setup',
    tone: 'danger',
  },
  {
    label: 'Document compliance',
    value: '91%',
    detail: '12 employee files need attention',
    tone: 'info',
  },
]

const upcomingItems = [
  'Payroll cutoff at 5:00 PM',
  '3 interviews scheduled today',
  'Probation review due tomorrow',
  'Policy acknowledgements close Friday',
]

export function OperationsPulse() {
  return (
    <aside className="pulse-panel" aria-label="Operations pulse">
      <div className="panel__header">
        <p className="eyebrow">Live pulse</p>
        <h2>Operational risk</h2>
      </div>
      <div className="pulse-list">
        {pulseItems.map((item) => (
          <article className={`pulse-item pulse-item--${item.tone}`} key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
      <div className="upcoming">
        <h3>Next on deck</h3>
        <ul>
          {upcomingItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
