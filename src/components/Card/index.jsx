import "./styles.css"

const Card = ({title, suffix, children, className=""}) => {
  return (
    <div className={`card-container ${className}`}>
        <p className="title">{title}</p>
        <div>
            {children}
        </div>
        {suffix}
    </div>
  )
}

export default Card