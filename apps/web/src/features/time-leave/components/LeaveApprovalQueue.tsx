export function LeaveApprovalQueue() {
  return (
    <div className="data-panel">
      <div className="panel__header">
        <h2>Leave approvals</h2>
      </div>
      <div className="record-list">
        {[
          ['Emergency leave', 'Mara Santos', 'Due today'],
          ['Vacation leave', 'Paolo Garcia', 'Coverage warning'],
          ['Sick leave', 'Nina Flores', 'Manager review'],
        ].map(([type, person, state]) => (
          <div className="record-row" key={`${type}-${person}`}>
            <span>
              <strong>{type}</strong>
              <small>{person}</small>
            </span>
            <span className="status-pill">{state}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
