import { ModulePreview } from '../../components/ui/ModulePreview'
import { ApplicantBoard } from '../../features/pipeline/components/ApplicantBoard'

export function PipelineRoute() {
  return (
    <ModulePreview
      eyebrow="Recruitment"
      title="Pipeline"
      description="Candidate stages, interview feedback, offers, and onboarding handoff."
      stats={[
        { label: 'Applicants', value: '73' },
        { label: 'Interviews today', value: '3' },
        { label: 'Offers open', value: '4' },
      ]}
    >
      <ApplicantBoard />
    </ModulePreview>
  )
}
