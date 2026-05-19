import { Injectable } from '@nestjs/common'
import {
  canAccess,
  filterRestrictedFields,
  type Permission,
  type RestrictedRecord,
  type Scope,
} from '@hrms/domain'
import type { AuthenticatedUser } from '../auth/authenticated-user.js'

export type PermissionScopeInput = {
  targetEmployeeId?: string
  targetApplicantId?: string
  targetDepartmentId?: string
}

@Injectable()
export class PermissionCheckerService {
  can(
    user: AuthenticatedUser,
    permission: Permission,
    input: PermissionScopeInput = {},
  ): boolean {
    const scope: Scope = {
      actorEmployeeId: user.employeeId,
      actorApplicantId: user.applicantId,
      actorDepartmentId: user.departmentId,
      managerEmployeeIds: user.managerEmployeeIds,
      ...input,
    }

    return canAccess(user.role, permission, scope)
  }

  canAll(
    user: AuthenticatedUser,
    permissions: Permission[],
    input: PermissionScopeInput = {},
  ): boolean {
    return permissions.every((permission) => this.can(user, permission, input))
  }

  filterRecord<T extends RestrictedRecord>(
    user: AuthenticatedUser,
    record: T,
  ): Partial<T> {
    return filterRestrictedFields(user.role, record)
  }
}
