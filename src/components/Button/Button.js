import './Button.scss'

export function Button({ title, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      <span className="button-title">{title}</span>
    </button>
  )
}
