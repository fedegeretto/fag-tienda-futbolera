import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const Cartwidget = () => {
  const {totalUnidades} = useContext(CartContext)
  return (
    <div>
      <i className="fa-solid fa-cart-shopping iconoCarrito"></i>
      <span>{totalUnidades() !== 0 && totalUnidades()}</span>
    </div>
    
  )
}

export default Cartwidget