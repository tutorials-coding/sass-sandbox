import './Button.scss'

const buttonSizeClassName = {
  sm: 'button-sm',
  md: 'button-md',
  lg: 'button-lg',
}

export function Button({ title, onClick, size = 'sm' }) {
  return (
    <button className={`button ${buttonSizeClassName[size]}`} onClick={onClick}>
      <span className="button-title">{title}</span>
    </button>
  )
}
