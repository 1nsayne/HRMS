import type { RoleLens } from '../../lib/permissions/role-lenses'

type TopbarProps = {
  activeRole: RoleLens
}

export function Topbar({ activeRole }: TopbarProps) {
  return (
    <header className="topbar">
      <div className="topbar__left">
        <input
          className="topbar__search"
          aria-label="Search employees, applicants, and actions"
          placeholder="Search people, applicants, documents..."
          type="search"
        />
        <span className="topbar__hint">Tuesday, May 19</span>
      </div>
      <div className="topbar__actions">
        <button className="button button--ghost" type="button">
          Quick add
        </button>
        <button className="button button--ghost" type="button">
          Alerts 9
        </button>
        <button className="user-button" type="button">
          <span className="avatar avatar--small">E</span>
          <span>{activeRole}</span>
        </button>
      </div>
    </header>
  )
}
