import "./styles.css";

const Button = ({children, onClick, variant, active}) => {
  return (
    <div onClick={onClick} className={`button-container ${variant?variant : "" } ${active ? "active" : ""}`}>{children}</div>
  )
}

export default Button