export const roles = [
  'Super Admin',
  'HR Manager',
  'HR Staff',
  'Department Manager',
  'Payroll Officer',
  'Employee',
  'Applicant',
] as const

export type Role = (typeof roles)[number]
