type RestrictedFieldProps = {
  label: string
  value: string
  allowed: boolean
}

export function RestrictedField({ allowed, label, value }: RestrictedFieldProps) {
  return (
    <div className="detail-row">
      <strong>{label}</strong>
      <span>{allowed ? value : 'Restricted'}</span>
    </div>
  )
}
