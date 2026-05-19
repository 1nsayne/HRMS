import { z } from 'zod'

export const actionItemRiskSchema = z.enum(['high', 'medium', 'low'])
export const actionItemTypeSchema = z.enum([
  'leave',
  'attendance',
  'document',
  'onboarding',
  'payroll',
])

export const actionItemSchema = z.object({
  id: z.string(),
  title: z.string(),
  person: z.string(),
  role: z.string(),
  department: z.string(),
  branch: z.string(),
  dueLabel: z.string(),
  type: actionItemTypeSchema,
  risk: actionItemRiskSchema,
  status: z.string(),
  reason: z.string(),
  policy: z.string(),
  owner: z.string(),
  nextStep: z.string(),
  attachments: z.array(z.string()),
  auditTrail: z.array(z.string()),
})

export type ActionItem = z.infer<typeof actionItemSchema>
