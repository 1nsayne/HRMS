export function PeopleTable() {
  return (
    <div className="data-panel">
      <div className="panel__header">
        <div className="section-title">
          <div>
            <p className="eyebrow">Directory</p>
            <h2>Employee records</h2>
          </div>
          <button className="button" type="button">
            Filter
          </button>
        </div>
      </div>
      <div className="record-list">
        {[
          ['Mara Santos', 'Customer Operations', 'Regular', '2 open actions'],
          ['Noel Reyes', 'Sales', 'Regular', 'Contract expiring'],
          ['Ira Lim', 'Finance', 'New hire', 'Onboarding'],
        ].map(([name, department, status, note]) => (
          <div className="record-row" key={name}>
            <span>
              <strong>{name}</strong>
              <small>{department}</small>
            </span>
            <span className="status-pill">{status}</span>
            <span className="muted">{note}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
