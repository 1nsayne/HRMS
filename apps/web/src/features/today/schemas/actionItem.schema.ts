export type ActionItemRisk = 'high' | 'medium' | 'low'

export type ActionItemType =
  | 'leave'
  | 'attendance'
  | 'document'
  | 'onboarding'
  | 'payroll'

export type ActionItem = {
  id: string
  title: string
  person: string
  role: string
  department: string
  branch: string
  dueLabel: string
  type: ActionItemType
  risk: ActionItemRisk
  status: string
  reason: string
  policy: string
  owner: string
  nextStep: string
  attachments: string[]
  auditTrail: string[]
}
