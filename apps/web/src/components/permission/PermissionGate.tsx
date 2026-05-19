import type { PropsWithChildren } from 'react'

type PermissionGateProps = PropsWithChildren<{
  allowed: boolean
}>

export function PermissionGate({ allowed, children }: PermissionGateProps) {
  return allowed ? <>{children}</> : null
}
