export function RoleLensSwitcher() {
  return (
    <label>
      <span className="brand__meta">Role lens</span>
      <select className="select" defaultValue="hr-manager">
        <option value="hr-manager">HR Manager</option>
        <option value="department-manager">Department Manager</option>
        <option value="employee">Employee</option>
        <option value="applicant">Applicant</option>
      </select>
    </label>
  )
}
