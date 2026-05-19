import { Badge } from '../../../components/ui/Badge'
import type { ActionItem } from '../schemas/actionItem.schema'
import { PersonSnapshot } from './PersonSnapshot'

type ActionDetailRailProps = {
  actionItem: ActionItem
}

export function ActionDetailRail({ actionItem }: ActionDetailRailProps) {
  return (
    <div className="detail-grid">
      <div className="detail-hero">
        <div>
          <Badge tone={actionItem.risk}>{actionItem.risk} risk</Badge>
          <h2>{actionItem.title}</h2>
          <p>{actionItem.reason}</p>
        </div>
        <span className="status-pill">{actionItem.status}</span>
      </div>

      <PersonSnapshot actionItem={actionItem} />

      <div className="detail-columns">
        <div className="detail-row">
          <strong>Branch</strong>
          <span>{actionItem.branch}</span>
        </div>
        <div className="detail-row">
          <strong>Owner</strong>
          <span>{actionItem.owner}</span>
        </div>
        <div className="detail-row">
          <strong>Due</strong>
          <span>{actionItem.dueLabel}</span>
        </div>
        <div className="detail-row">
          <strong>Workflow</strong>
          <span>{actionItem.type}</span>
        </div>
      </div>

      <div className="policy-box">
        <h3>Policy reason</h3>
        <p>{actionItem.policy}</p>
      </div>

      <div className="policy-box policy-box--next">
        <h3>Recommended next step</h3>
        <p>{actionItem.nextStep}</p>
      </div>

      <div>
        <h3>Attachments</h3>
        <div className="attachment-list">
          {actionItem.attachments.map((attachment) => (
            <span className="attachment" key={attachment}>
              {attachment}
            </span>
          ))}
        </div>
      </div>

      <div className="audit-section">
        <h3>Audit trail</h3>
        <ul className="timeline">
          {actionItem.auditTrail.map((entry) => (
            <li key={entry}>{entry}</li>
          ))}
        </ul>
      </div>

      <div className="batch-actions">
        <button className="button button--primary" type="button">
          Approve
        </button>
        <button className="button button--danger" type="button">
          Reject
        </button>
        <button className="button" type="button">
          Request correction
        </button>
      </div>
    </div>
  )
}
