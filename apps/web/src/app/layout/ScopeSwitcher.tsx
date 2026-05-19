export function ScopeSwitcher() {
  return (
    <label>
      <span className="brand__meta">Scope</span>
      <select className="select" defaultValue="all-branches">
        <option value="all-branches">All branches</option>
        <option value="main-office">Main office</option>
        <option value="operations">Operations</option>
      </select>
    </label>
  )
}
