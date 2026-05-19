export function PermissionsMatrix() {
  return (
    <div className="data-panel">
      <div className="panel__header">
        <h2>Permission groups</h2>
      </div>
      <div className="permission-grid">
        {[
          ['Payroll', 'Payroll Officer only'],
          ['Case notes', 'HR Manager restricted'],
          ['Employee documents', 'HR scoped access'],
          ['Approvals', 'Manager relationship'],
        ].map(([area, rule]) => (
          <article key={area}>
            <strong>{area}</strong>
            <span>{rule}</span>
          </article>
        ))}
      </div>
    </div>
  )
}
