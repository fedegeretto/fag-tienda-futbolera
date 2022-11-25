import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';


const Cart = () => {

  // Si quiero pintar los productos llamo al estado "cart" del contexto
  const {cart, deleteAll, deleteOne, totalPrecio} = useContext(CartContext)
  console.log(cart.length);

  if (cart.length > 0) {
    return (
      <div>
        {cart.map((prod) => (
            <div key={prod.id}>
              <img src={prod.img} alt={prod.title} width="200px"/>
              <div>
                <h3>{prod.title}</h3>
                <h3>{prod.cantidad}</h3>
                <button onClick={() => deleteOne(prod.id)}>Eliminar</button>
              </div>
              </div>
          ))}
          <h2>Total: ${totalPrecio()}</h2>
          <button onClick={deleteAll}>Vaciar carrito</button>
          <Link to='/checkout'>Finalizar Compra</Link>
      </div>);
  } else {
    return <h2>No hay productos, Vuelva a la <Link to='/'>Pagina Principal</Link> para llenar el carrito. </h2>
  }

  
};

export default Cart