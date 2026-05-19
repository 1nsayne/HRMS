import type { RoleLens } from './role-lenses'

export type UiPermission =
  | 'action-item:approve'
  | 'employee:read'
  | 'applicant:read'
  | 'document:read'
  | 'payroll:read'
  | 'case:read'
  | 'performance:read'
  | 'admin:manage'

const rolePermissions: Record<RoleLens, UiPermission[]> = {
  'HR Manager': [
    'action-item:approve',
    'employee:read',
    'applicant:read',
    'document:read',
    'case:read',
    'performance:read',
    'admin:manage',
  ],
  'HR Staff': [
    'employee:read',
    'applicant:read',
    'document:read',
    'action-item:approve',
  ],
  'Department Manager': [
    'action-item:approve',
    'employee:read',
    'performance:read',
  ],
  'Payroll Officer': ['employee:read', 'document:read', 'payroll:read'],
  Employee: ['employee:read'],
  Applicant: ['applicant:read'],
}

export function can(role: RoleLens, permission: UiPermission) {
  return rolePermissions[role].includes(permission)
}
