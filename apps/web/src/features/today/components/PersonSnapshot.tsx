import type { ActionItem } from '../schemas/actionItem.schema'

type PersonSnapshotProps = {
  actionItem: ActionItem
}

export function PersonSnapshot({ actionItem }: PersonSnapshotProps) {
  const initials = actionItem.person
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)

  return (
    <div className="person-snapshot">
      <div className="avatar" aria-hidden="true">
        {initials}
      </div>
      <div>
        <h3>{actionItem.person}</h3>
        <p>{actionItem.role}</p>
        <span>{actionItem.department}</span>
      </div>
    </div>
  )
}
