import { useState } from "react"

const ItemCount = ({stock, initial, onAdd}) => {

  const [cantidad, setCantidad] = useState(initial)

  const sumar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1)
    }
  }

  const restar = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1)
    }
  }

  return (
    <>
      <div className="contenedorCantidad">
        <div className="cantidad">
          <button onClick={restar} disabled={cantidad === initial}>-</button>
          <p>{cantidad}</p>
          <button onClick={sumar} disabled={cantidad === stock}>+</button>
        </div>
        <button className="btnAgregar" disabled={cantidad === initial} onClick={() => onAdd(cantidad)}>Agregar al carrito</button>
      </div> 
    </>
  )
}

export default ItemCount