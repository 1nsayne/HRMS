import { useState } from 'react'
import type { AppRoute } from '../navigation/appRoutes'
import { RouteRenderer } from '../routes/router'
import type { RoleLens } from '../../lib/permissions/role-lenses'
import { Sidebar } from './Sidebar'
import { Topbar } from './Topbar'

export function AppShell() {
  const [activeRoute, setActiveRoute] = useState<AppRoute>('today')
  const [activeRole, setActiveRole] = useState<RoleLens>('HR Manager')

  return (
    <div className="app-shell">
      <Sidebar
        activeRoute={activeRoute}
        activeRole={activeRole}
        onRoleChange={setActiveRole}
        onRouteChange={setActiveRoute}
      />
      <main className="main-area">
        <Topbar activeRole={activeRole} />
        <div className="content">
          <RouteRenderer activeRole={activeRole} activeRoute={activeRoute} />
        </div>
      </main>
    </div>
  )
}
