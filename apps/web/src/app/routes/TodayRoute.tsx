import { useState } from 'react'
import { BatchActionBar } from '../../features/today/components/BatchActionBar'
import { ActionDetailRail } from '../../features/today/components/ActionDetailRail'
import { ActionQueue } from '../../features/today/components/ActionQueue'
import { MetricStrip } from '../../features/today/components/MetricStrip'
import { OperationsPulse } from '../../features/today/components/OperationsPulse'
import { QueueFilters } from '../../features/today/components/QueueFilters'
import { mockActionItems } from '../../lib/test-data/mockActionItems'

export function TodayRoute() {
  const [selectedId, setSelectedId] = useState(mockActionItems[0]?.id ?? '')
  const selectedItem =
    mockActionItems.find((item) => item.id === selectedId) ?? mockActionItems[0]

  return (
    <>
      <header className="page-header">
        <div>
          <p className="eyebrow">HR operations</p>
          <h1>Today workspace</h1>
          <p className="muted">
            Resolve approvals, attendance exceptions, onboarding blockers, and
            expiring document risks.
          </p>
        </div>
        <div className="lens-controls">
          <button className="button button--primary" type="button">
            New action
          </button>
          <button className="button" type="button">
            Run payroll check
          </button>
        </div>
      </header>

      <MetricStrip />

      <div className="dashboard-grid">
        <section className="panel" aria-label="Work queue">
          <div className="panel__header">
            <div className="section-title">
              <div>
                <p className="eyebrow">Prioritized</p>
                <h2>Work queue</h2>
              </div>
              <span className="count-pill">{mockActionItems.length}</span>
            </div>
            <QueueFilters />
          </div>
          <div className="panel__body">
            <ActionQueue
              actionItems={mockActionItems}
              selectedId={selectedItem.id}
              onSelect={setSelectedId}
            />
          </div>
        </section>

        <section className="panel" aria-label="Selected action detail">
          <div className="panel__header">
            <div className="section-title">
              <div>
                <p className="eyebrow">Decision context</p>
                <h2>Context rail</h2>
              </div>
            </div>
            <BatchActionBar />
          </div>
          <div className="panel__body">
            <ActionDetailRail actionItem={selectedItem} />
          </div>
        </section>

        <OperationsPulse />
      </div>
    </>
  )
}
