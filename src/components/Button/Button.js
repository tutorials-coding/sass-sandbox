import './Button.scss'

const buttonSizeClassName = {
  sm: 'button-sm',
  md: 'button-md',
  lg: 'button-lg',
}

const buttonTypeClassName = {
  success: 'button-type-success',
  error: 'button-type-error',
  info: 'button-type-info',
}

export function Button({
  title,
  onClick,
  size = 'sm',
  type = 'info',
  disabled = false,
}) {
  return (
    <button
      className={`button ${buttonSizeClassName[size]} ${buttonTypeClassName[type]}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="button-title">{title}</span>
    </button>
  )
}
