export function AuditLogTable() {
  return (
    <div className="data-panel">
      <div className="panel__header">
        <h2>Recent audit events</h2>
      </div>
      <div className="record-list">
        {[
          ['Leave approved', 'Department Manager', '2 minutes ago'],
          ['Document viewed', 'HR Staff', '9 minutes ago'],
          ['Role updated', 'Super Admin', '24 minutes ago'],
        ].map(([event, actor, time]) => (
          <div className="record-row" key={`${event}-${time}`}>
            <span>
              <strong>{event}</strong>
              <small>{actor}</small>
            </span>
            <span className="muted">{time}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
