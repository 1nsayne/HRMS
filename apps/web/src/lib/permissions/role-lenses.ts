export const roleLenses = [
  'HR Manager',
  'HR Staff',
  'Department Manager',
  'Payroll Officer',
  'Employee',
  'Applicant',
] as const

export type RoleLens = (typeof roleLenses)[number]
