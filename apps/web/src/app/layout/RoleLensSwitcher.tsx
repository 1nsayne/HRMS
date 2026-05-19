import { roleLenses, type RoleLens } from '../../lib/permissions/role-lenses'

type RoleLensSwitcherProps = {
  value: RoleLens
  onChange: (role: RoleLens) => void
}

export function RoleLensSwitcher({ onChange, value }: RoleLensSwitcherProps) {
  return (
    <label>
      <span className="brand__meta">Role lens</span>
      <select
        className="select"
        value={value}
        onChange={(event) => onChange(event.target.value as RoleLens)}
      >
        {roleLenses.map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>
    </label>
  )
}
