import { appRoutes, type AppRoute } from '../navigation/appRoutes'
import { RoleLensSwitcher } from './RoleLensSwitcher'
import { ScopeSwitcher } from './ScopeSwitcher'

type SidebarProps = {
  activeRoute: AppRoute
  onRouteChange: (route: AppRoute) => void
}

export function Sidebar({ activeRoute, onRouteChange }: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <span className="brand__name">HRMS</span>
        <span className="brand__meta">Operations workspace</span>
      </div>

      <nav className="nav-list" aria-label="Main navigation">
        {appRoutes.map((route) => (
          <button
            className={
              route.key === activeRoute
                ? 'nav-button nav-button--active'
                : 'nav-button'
            }
            key={route.key}
            onClick={() => onRouteChange(route.key)}
            type="button"
          >
            <span className="nav-button__icon">{route.icon}</span>
            <span>
              <span className="nav-button__label">{route.label}</span>
              <span className="nav-button__description">{route.description}</span>
            </span>
          </button>
        ))}
      </nav>

      <div className="sidebar__footer">
        <RoleLensSwitcher />
        <ScopeSwitcher />
      </div>
    </aside>
  )
}
