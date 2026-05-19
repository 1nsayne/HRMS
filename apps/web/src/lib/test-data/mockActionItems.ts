import type { ActionItem } from '../../features/today/schemas/actionItem.schema'

export const mockActionItems: ActionItem[] = [
  {
    id: 'act-leave-001',
    title: 'Approve emergency leave',
    person: 'Mara Santos',
    role: 'Customer Support Lead',
    department: 'Customer Operations',
    branch: 'Main office',
    dueLabel: 'Due today',
    type: 'leave',
    risk: 'medium',
    status: 'Manager approval',
    owner: 'Department Manager',
    reason:
      'Emergency leave needs manager approval before the attendance cutoff today.',
    policy:
      'Emergency leave can be approved same-day when coverage remains above the team minimum.',
    nextStep: 'Approve, reject, or request proof before the 5:00 PM cutoff.',
    attachments: ['Medical note pending', 'Coverage snapshot'],
    auditTrail: [
      'Mara submitted request at 8:12 AM',
      'Coverage warning checked by HRMS',
      'Queued for Department Manager review',
    ],
  },
  {
    id: 'act-doc-002',
    title: 'Collect expiring contract',
    person: 'Noel Reyes',
    role: 'Account Executive',
    department: 'Sales',
    branch: 'Cebu branch',
    dueLabel: 'Expires in 3 days',
    type: 'document',
    risk: 'high',
    status: 'Compliance blocker',
    owner: 'HR Staff',
    reason:
      'The current employment contract expires soon and blocks payroll readiness.',
    policy:
      'Active contract documents are required before payroll approval for regular employees.',
    nextStep: 'Send reminder and assign HR Staff follow-up today.',
    attachments: ['Current contract.pdf', 'Renewal checklist'],
    auditTrail: [
      'Document expiry detected overnight',
      'Reminder prepared for employee',
      'Payroll readiness marked as blocked',
    ],
  },
  {
    id: 'act-att-003',
    title: 'Resolve missing clock out',
    person: 'Lian Cruz',
    role: 'Warehouse Associate',
    department: 'Warehouse',
    branch: 'Laguna warehouse',
    dueLabel: 'Open 1 day',
    type: 'attendance',
    risk: 'low',
    status: 'Correction needed',
    owner: 'HR Staff',
    reason:
      'Attendance record has a clock in but no clock out for the closing shift.',
    policy:
      'Missing clock records must be corrected before overtime or undertime is calculated.',
    nextStep: 'Confirm shift end with the manager and apply the correction.',
    attachments: ['Manager note', 'Shift schedule'],
    auditTrail: [
      'Exception created after shift close',
      'Manager note added',
      'Waiting for HR correction',
    ],
  },
  {
    id: 'act-onb-004',
    title: 'Complete new hire account setup',
    person: 'Ira Lim',
    role: 'Payroll Analyst',
    department: 'Finance',
    branch: 'Main office',
    dueLabel: 'Starts tomorrow',
    type: 'onboarding',
    risk: 'high',
    status: 'Start-date blocker',
    owner: 'HR Manager',
    reason:
      'New hire starts tomorrow and still needs email, payroll profile, and policy acknowledgement.',
    policy:
      'New hire system access and payroll profile must be completed before day one.',
    nextStep: 'Assign IT setup, verify payroll profile, and send policy packet.',
    attachments: ['Offer letter.pdf', 'Onboarding checklist'],
    auditTrail: [
      'Applicant converted to employee',
      'Onboarding checklist generated',
      'Account setup task is still incomplete',
    ],
  },
]
