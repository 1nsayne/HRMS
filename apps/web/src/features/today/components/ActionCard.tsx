import { Badge } from '../../../components/ui/Badge'
import type { ActionItem } from '../schemas/actionItem.schema'

type ActionCardProps = {
  actionItem: ActionItem
  isSelected: boolean
  onSelect: (id: string) => void
}

export function ActionCard({
  actionItem,
  isSelected,
  onSelect,
}: ActionCardProps) {
  return (
    <button
      className={isSelected ? 'action-card action-card--selected' : 'action-card'}
      onClick={() => onSelect(actionItem.id)}
      type="button"
    >
      <span className="action-card__header">
        <span>
          <span className="action-card__type">{actionItem.type}</span>
          <span className="action-card__title">{actionItem.title}</span>
        </span>
        <Badge tone={actionItem.risk}>{actionItem.risk}</Badge>
      </span>
      <span className="action-card__meta">
        <span>{actionItem.person}</span>
        <span>{actionItem.role}</span>
      </span>
      <span className="action-card__meta">
        <span>{actionItem.status}</span>
        <span>{actionItem.dueLabel}</span>
      </span>
    </button>
  )
}
