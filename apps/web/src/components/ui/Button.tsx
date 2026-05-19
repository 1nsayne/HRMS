import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'default' | 'primary' | 'ghost' | 'danger'
  }
>

export function Button({
  children,
  className = '',
  variant = 'default',
  ...props
}: ButtonProps) {
  const variantClass = variant === 'default' ? '' : ` button--${variant}`

  return (
    <button className={`button${variantClass} ${className}`.trim()} {...props}>
      {children}
    </button>
  )
}
