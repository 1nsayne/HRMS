import { Module } from '@nestjs/common'
import { PermissionCheckerService } from './permission-checker.service.js'
import { PermissionsGuard } from './permissions.guard.js'

@Module({
  providers: [PermissionCheckerService, PermissionsGuard],
  exports: [PermissionCheckerService, PermissionsGuard],
})
export class PermissionsModule {}
