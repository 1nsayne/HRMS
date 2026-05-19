import { describe, expect, it } from 'vitest'
import { canAccess, filterRestrictedFields } from './permissions.js'

describe('permission rules', () => {
  it('lets employees read their own record only', () => {
    expect(
      canAccess('Employee', 'employee:read', {
        actorEmployeeId: 'emp-1',
        targetEmployeeId: 'emp-1',
      }),
    ).toBe(true)

    expect(
      canAccess('Employee', 'employee:read', {
        actorEmployeeId: 'emp-1',
        targetEmployeeId: 'emp-2',
      }),
    ).toBe(false)
  })

  it('lets department managers act only on managed employees', () => {
    expect(
      canAccess('Department Manager', 'leave:approve', {
        targetEmployeeId: 'emp-2',
        managerEmployeeIds: ['emp-1', 'emp-2'],
      }),
    ).toBe(true)

    expect(
      canAccess('Department Manager', 'leave:approve', {
        targetEmployeeId: 'emp-3',
        managerEmployeeIds: ['emp-1', 'emp-2'],
      }),
    ).toBe(false)
  })

  it('hides restricted fields from non-privileged roles', () => {
    const visibleRecord = filterRestrictedFields('HR Staff', {
      name: 'Mara Santos',
      salaryAmount: 75000,
      caseNotes: 'Confidential',
    })

    expect(visibleRecord).toEqual({ name: 'Mara Santos' })
  })
})
