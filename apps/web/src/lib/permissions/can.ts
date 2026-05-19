export function can(userPermissions: string[], permission: string) {
  return userPermissions.includes(permission)
}
