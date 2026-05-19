import { SetMetadata } from '@nestjs/common'
import type { Permission } from '@hrms/domain'

export const REQUIRED_PERMISSIONS_KEY = 'required_permissions'

export function RequirePermissions(...permissions: Permission[]) {
  return SetMetadata(REQUIRED_PERMISSIONS_KEY, permissions)
}
