import type { Role } from './roles.js'

export const permissions = [
  'action-item:read',
  'action-item:approve',
  'employee:read',
  'employee:write',
  'applicant:read',
  'applicant:write',
  'leave:approve',
  'attendance:resolve',
  'document:read',
  'document:acknowledge',
  'payroll:read',
  'case:read',
  'performance:read',
  'admin:manage',
  'audit-event:read',
] as const

export type Permission = (typeof permissions)[number]

export type Scope = {
  actorEmployeeId?: string
  actorApplicantId?: string
  actorDepartmentId?: string
  targetEmployeeId?: string
  targetApplicantId?: string
  targetDepartmentId?: string
  managerEmployeeIds?: string[]
}

export type RestrictedRecord = Record<string, unknown>

export const sensitiveFields = [
  'salary',
  'salaryAmount',
  'deductions',
  'payrollItems',
  'caseNotes',
  'disciplinaryNotes',
  'performanceReview',
  'governmentId',
] as const

export const rolePermissions: Record<Role, Permission[]> = {
  'Super Admin': [...permissions],
  'HR Manager': [
    'action-item:read',
    'action-item:approve',
    'employee:read',
    'employee:write',
    'applicant:read',
    'applicant:write',
    'leave:approve',
    'attendance:resolve',
    'document:read',
    'document:acknowledge',
    'case:read',
    'performance:read',
    'admin:manage',
    'audit-event:read',
  ],
  'HR Staff': [
    'action-item:read',
    'employee:read',
    'employee:write',
    'applicant:read',
    'applicant:write',
    'attendance:resolve',
    'document:read',
    'document:acknowledge',
    'audit-event:read',
  ],
  'Department Manager': [
    'action-item:read',
    'action-item:approve',
    'employee:read',
    'leave:approve',
    'attendance:resolve',
    'performance:read',
  ],
  'Payroll Officer': [
    'action-item:read',
    'employee:read',
    'attendance:resolve',
    'document:read',
    'payroll:read',
    'audit-event:read',
  ],
  Employee: [
    'action-item:read',
    'employee:read',
    'document:acknowledge',
  ],
  Applicant: ['applicant:read', 'applicant:write', 'document:acknowledge'],
}

export function permissionsForRole(role: Role): Permission[] {
  return rolePermissions[role] ?? []
}

export function hasPermission(role: Role, permission: Permission): boolean {
  return permissionsForRole(role).includes(permission)
}

export function canAccess(
  role: Role,
  permission: Permission,
  scope: Scope = {},
): boolean {
  if (!hasPermission(role, permission)) {
    return false
  }

  if (role === 'Super Admin' || role === 'HR Manager' || role === 'HR Staff') {
    return true
  }

  if (role === 'Payroll Officer') {
    return permission === 'payroll:read' || permission !== 'case:read'
  }

  if (role === 'Department Manager') {
    if (!scope.targetEmployeeId) {
      return true
    }

    return (scope.managerEmployeeIds ?? []).includes(scope.targetEmployeeId)
  }

  if (role === 'Employee') {
    return (
      scope.actorEmployeeId !== undefined &&
      scope.actorEmployeeId === scope.targetEmployeeId
    )
  }

  if (role === 'Applicant') {
    return (
      scope.actorApplicantId !== undefined &&
      scope.actorApplicantId === scope.targetApplicantId
    )
  }

  return false
}

export function filterRestrictedFields<T extends RestrictedRecord>(
  role: Role,
  record: T,
): Partial<T> {
  if (
    role === 'Super Admin' ||
    role === 'HR Manager' ||
    role === 'Payroll Officer'
  ) {
    return record
  }

  return Object.fromEntries(
    Object.entries(record).filter(
      ([key]) => !sensitiveFields.includes(key as (typeof sensitiveFields)[number]),
    ),
  ) as Partial<T>
}
