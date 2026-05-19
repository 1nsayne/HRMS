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

export const employeePortalRoles = ['Employee', 'Applicant'] as const

export const managerPortalRoles = [
  'HR Manager',
  'HR Staff',
  'Department Manager',
  'Payroll Officer',
] as const
