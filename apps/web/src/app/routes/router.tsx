import { AdminRoute } from './AdminRoute'
import { PeopleRoute } from './PeopleRoute'
import { PipelineRoute } from './PipelineRoute'
import { TimeLeaveRoute } from './TimeLeaveRoute'
import { TodayRoute } from './TodayRoute'
import type { AppRoute } from '../navigation/appRoutes'

type RouteRendererProps = {
  activeRoute: AppRoute
}

export function RouteRenderer({ activeRoute }: RouteRendererProps) {
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
      return <TodayRoute />
  }
}
