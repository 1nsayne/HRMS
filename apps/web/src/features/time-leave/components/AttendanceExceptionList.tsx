export function AttendanceExceptionList() {
  return (
    <div className="data-panel">
      <div className="panel__header">
        <h2>Attendance exceptions</h2>
      </div>
      <div className="exception-grid">
        <article>
          <strong>4</strong>
          <span>Missing clocks</span>
        </article>
        <article>
          <strong>3</strong>
          <span>Late arrivals</span>
        </article>
        <article>
          <strong>2</strong>
          <span>Overtime checks</span>
        </article>
      </div>
    </div>
  )
}
