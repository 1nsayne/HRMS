import {
  Injectable,
  type CanActivate,
  type ExecutionContext,
} from '@nestjs/common'
import { permissionsForRole, roles, type Role } from '@hrms/domain'
import type { AuthenticatedUser } from './authenticated-user.js'

type HeaderValue = string | string[] | undefined

type RequestWithDemoHeaders = {
  headers: Record<string, HeaderValue>
  user?: AuthenticatedUser
}

function firstHeader(value: HeaderValue): string | undefined {
  return Array.isArray(value) ? value[0] : value
}

function parseRole(value: HeaderValue): Role {
  const requestedRole = firstHeader(value)

  if (requestedRole && roles.includes(requestedRole as Role)) {
    return requestedRole as Role
  }

  return 'HR Manager'
}

@Injectable()
export class OidcAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<RequestWithDemoHeaders>()
    const role = parseRole(request.headers['x-demo-role'])

    request.user = {
      id: firstHeader(request.headers['x-demo-user-id']) ?? 'demo-user',
      email: firstHeader(request.headers['x-demo-email']) ?? 'demo@hrms.local',
      displayName: firstHeader(request.headers['x-demo-name']) ?? 'Demo User',
      role,
      permissions: permissionsForRole(role),
      employeeId: firstHeader(request.headers['x-demo-employee-id']),
      applicantId: firstHeader(request.headers['x-demo-applicant-id']),
      departmentId: firstHeader(request.headers['x-demo-department-id']),
      managerEmployeeIds:
        firstHeader(request.headers['x-demo-manager-employee-ids'])
          ?.split(',')
          .map((id) => id.trim())
          .filter(Boolean) ?? [],
    }

    return true
  }
}
