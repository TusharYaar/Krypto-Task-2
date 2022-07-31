import "./styles.css"

const Card = ({title, suffix, children, className=""}) => {
  return (
    <div className={`card-container ${className}`}>
        <div className="card-data">
        <p className="title">{title}</p>
            {children}
        </div>
        {suffix}
    </div>
  )
}

export default Card