import type { Permission, Role } from '@hrms/domain'

export type AuthenticatedUser = {
  id: string
  email: string
  displayName: string
  role: Role
  permissions: Permission[]
  employeeId?: string
  applicantId?: string
  departmentId?: string
  managerEmployeeIds?: string[]
}
