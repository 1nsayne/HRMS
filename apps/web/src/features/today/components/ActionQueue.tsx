import { ActionCard } from './ActionCard'
import type { ActionItem } from '../schemas/actionItem.schema'

type ActionQueueProps = {
  actionItems: ActionItem[]
  selectedId: string
  onSelect: (id: string) => void
}

export function ActionQueue({
  actionItems,
  selectedId,
  onSelect,
}: ActionQueueProps) {
  return (
    <div className="action-list">
      {actionItems.map((actionItem) => (
        <ActionCard
          actionItem={actionItem}
          isSelected={actionItem.id === selectedId}
          key={actionItem.id}
          onSelect={onSelect}
        />
      ))}
    </div>
  )
}
