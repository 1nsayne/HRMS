const filters = [
  'All work',
  'My approvals',
  'Payroll blockers',
  'New hires',
  'Expiring documents',
  'My team',
]

export function QueueFilters() {
  return (
    <div className="queue-filters" aria-label="Queue filters">
      {filters.map((filter, index) => (
        <button
          className={index === 0 ? 'filter-chip filter-chip--active' : 'filter-chip'}
          key={filter}
          type="button"
        >
          {filter}
        </button>
      ))}
    </div>
  )
}
