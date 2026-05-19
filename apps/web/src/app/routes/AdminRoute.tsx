import { ModulePreview } from '../../components/ui/ModulePreview'
import { AuditLogTable } from '../../features/admin/components/AuditLogTable'
import { PermissionsMatrix } from '../../features/admin/components/PermissionsMatrix'

export function AdminRoute() {
  return (
    <ModulePreview
      eyebrow="Security and setup"
      title="Admin"
      description="Roles, permissions, departments, document rules, workflows, and audit logs."
      stats={[
        { label: 'Roles', value: '7' },
        { label: 'Audit events today', value: '126' },
        { label: 'Policy rules', value: '34' },
      ]}
    >
      <PermissionsMatrix />
      <AuditLogTable />
    </ModulePreview>
  )
}
