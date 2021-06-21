import './Card.scss'

export function Card({ title, subtitle }) {
  return (
    <div className="card-container">
      <h3 className="card-title">{title}</h3>
      <p className="card-subtitle">{subtitle}</p>
    </div>
  )
}
