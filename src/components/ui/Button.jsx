// Button.jsx - Botón reutilizable con variantes primary y outline

const Button = ({ label, href, icon, variant = 'primary', onClick, className = '' }) => {
  const base =
    'inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 cursor-pointer'

  const variants = {
    primary:
      'bg-(--color-primary) text-white hover:bg-(--color-primary-light) shadow-lg hover:shadow-xl hover:scale-105',
    outline:
      'border-2 border-(--color-primary) text-(--color-primary) hover:bg-(--color-primary) hover:text-white',
    accent:
      'bg-(--color-accent) text-white hover:bg-(--color-accent-light) shadow-lg hover:shadow-xl hover:scale-105',
  }

  const classes = `${base} ${variants[variant] || variants.primary} ${className}`

  if (href) {
    return (
      <a href={href} className={classes}>
        {icon && <span>{icon}</span>}
        {label}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {icon && <span>{icon}</span>}
      {label}
    </button>
  )
}

export default Button
