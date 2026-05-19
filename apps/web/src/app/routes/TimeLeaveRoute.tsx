import { ModulePreview } from '../../components/ui/ModulePreview'
import { AttendanceExceptionList } from '../../features/time-leave/components/AttendanceExceptionList'
import { LeaveApprovalQueue } from '../../features/time-leave/components/LeaveApprovalQueue'

export function TimeLeaveRoute() {
  return (
    <ModulePreview
      eyebrow="Time tracking"
      title="Time and Leave"
      description="Leave requests, manager approvals, late arrivals, undertime, and missing clock exceptions."
      stats={[
        { label: 'Pending leave', value: '18' },
        { label: 'Exceptions', value: '9' },
        { label: 'Overtime requests', value: '6' },
      ]}
    >
      <LeaveApprovalQueue />
      <AttendanceExceptionList />
    </ModulePreview>
  )
}
