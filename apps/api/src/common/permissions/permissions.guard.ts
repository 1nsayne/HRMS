import {
  ForbiddenException,
  Injectable,
  type CanActivate,
  type ExecutionContext,
} from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import type { Permission } from '@hrms/domain'
import type { AuthenticatedUser } from '../auth/authenticated-user.js'
import { PermissionCheckerService } from './permission-checker.service.js'
import { REQUIRED_PERMISSIONS_KEY } from './permissions.decorator.js'

type RequestWithUserAndParams = {
  user?: AuthenticatedUser
  params?: Record<string, string | undefined>
}

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly permissionChecker: PermissionCheckerService,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredPermissions =
      this.reflector.getAllAndOverride<Permission[]>(REQUIRED_PERMISSIONS_KEY, [
        context.getHandler(),
        context.getClass(),
      ]) ?? []

    if (requiredPermissions.length === 0) {
      return true
    }

    const request = context.switchToHttp().getRequest<RequestWithUserAndParams>()

    if (!request.user) {
      throw new ForbiddenException('Authenticated user is required.')
    }

    const allowed = this.permissionChecker.canAll(request.user, requiredPermissions, {
      targetEmployeeId: request.params?.employeeId,
      targetApplicantId: request.params?.applicantId,
      targetDepartmentId: request.params?.departmentId,
    })

    if (!allowed) {
      throw new ForbiddenException('You do not have permission for this action.')
    }

    return true
  }
}
