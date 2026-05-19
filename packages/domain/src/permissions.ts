export const permissions = [
  'action-item:read',
  'action-item:approve',
  'employee:read',
  'employee:write',
  'applicant:read',
  'applicant:write',
  'leave:approve',
  'document:acknowledge',
  'audit-event:read',
] as const

export type Permission = (typeof permissions)[number]
