import { AdminRoute } from './AdminRoute'
import { PeopleRoute } from './PeopleRoute'
import { PipelineRoute } from './PipelineRoute'
import { TimeLeaveRoute } from './TimeLeaveRoute'
import { TodayRoute } from './TodayRoute'
import type { AppRoute } from '../navigation/appRoutes'
import type { RoleLens } from '../../lib/permissions/role-lenses'

type RouteRendererProps = {
  activeRoute: AppRoute
  activeRole: RoleLens
}

export function RouteRenderer({ activeRole, activeRoute }: RouteRendererProps) {
  switch (activeRoute) {
    case 'people':
      return <PeopleRoute />
    case 'pipeline':
      return <PipelineRoute />
    case 'time-leave':
      return <TimeLeaveRoute />
    case 'admin':
      return <AdminRoute />
    case 'today':
    default:
      return <TodayRoute activeRole={activeRole} />
  }
}
