import { Link } from 'react-router-dom'

function InstrumentCard({ id, name, image }) {
  return (
    <div className="column is-3">
      <Link to={`/instruments/${id}`}>
        <div className="card">
          <div className="card-header">
            <div className="card-header-title">{name}</div>
          </div>
          <div className="card-image">
            <figure className="image image-is-1by1">
              <img className="cardimg" src={image} alt={name} />
            </figure>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default InstrumentCard