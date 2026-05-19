import type { PropsWithChildren } from 'react'
import type { ActionItemRisk } from '../../features/today/schemas/actionItem.schema'

type BadgeProps = PropsWithChildren<{
  tone?: ActionItemRisk
}>

export function Badge({ children, tone }: BadgeProps) {
  return <span className={tone ? `badge badge--${tone}` : 'badge'}>{children}</span>
}
