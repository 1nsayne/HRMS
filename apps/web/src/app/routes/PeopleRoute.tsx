import { ModulePreview } from '../../components/ui/ModulePreview'
import { PeopleTable } from '../../features/people/components/PeopleTable'

export function PeopleRoute() {
  return (
    <ModulePreview
      eyebrow="Employee management"
      title="People"
      description="Directory, employee profiles, job details, documents, and lifecycle history."
      stats={[
        { label: 'Active employees', value: '248' },
        { label: 'Departments', value: '12' },
        { label: 'Missing files', value: '18' },
      ]}
    >
      <PeopleTable />
    </ModulePreview>
  )
}
