export type AppRoute = 'today' | 'people' | 'pipeline' | 'time-leave' | 'admin'

export const appRoutes: Array<{
  key: AppRoute
  label: string
  icon: string
  description: string
}> = [
  {
    key: 'today',
    label: 'Today',
    icon: 'T',
    description: 'Daily action queue',
  },
  {
    key: 'people',
    label: 'People',
    icon: 'P',
    description: 'Employees and records',
  },
  {
    key: 'pipeline',
    label: 'Pipeline',
    icon: 'R',
    description: 'Hiring and onboarding',
  },
  {
    key: 'time-leave',
    label: 'Time and Leave',
    icon: 'L',
    description: 'Attendance and leave',
  },
  {
    key: 'admin',
    label: 'Admin',
    icon: 'A',
    description: 'Security and setup',
  },
]
