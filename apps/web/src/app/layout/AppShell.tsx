import { useState } from 'react'
import type { AppRoute } from '../navigation/appRoutes'
import { RouteRenderer } from '../routes/router'
import { Sidebar } from './Sidebar'
import { Topbar } from './Topbar'

export function AppShell() {
  const [activeRoute, setActiveRoute] = useState<AppRoute>('today')

  return (
    <div className="app-shell">
      <Sidebar activeRoute={activeRoute} onRouteChange={setActiveRoute} />
      <main className="main-area">
        <Topbar />
        <div className="content">
          <RouteRenderer activeRoute={activeRoute} />
        </div>
      </main>
    </div>
  )
}
