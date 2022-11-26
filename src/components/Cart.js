import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

const Cart = () => {

  const {cart, deleteAll, deleteOne, totalPrecio} = useContext(CartContext)

  if (cart.length > 0) {
    return (
      <div>
        {cart.map((prod) => (
            <div key={prod.id} className='productoCarrito'>
              <img src={prod.img} alt={prod.title} width="200px"/>
              <div className='detallesCarrito'>
                <h3>{prod.title}</h3>
                <h4>Cantidad: {prod.cantidad}</h4>
                <button onClick={() => deleteOne(prod.id)} className='btnAgregar'>Eliminar</button>
              </div>
            </div>
          ))}
          <h2 className='total'>Total: ${totalPrecio()}</h2>
          <button onClick={deleteAll} className='btnAgregar vaciar'>Vaciar carrito</button>
          <Link to='/checkout' className='btnAgregar vaciar naranja'>Finalizar Compra</Link>
      </div>);
  } else {
    return <h2 className='vaciar'>No hay productos, Vuelva a la <Link to='/'>Pagina Principal</Link> para llenar el carrito. </h2>
  }
};

export default Cart