import React from 'react'
import ItemCount from './ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const ItemDetail = ({item}) => {

    const [cant, setCant] = useState(0)

    const {addToCart, cantidadDeProducto} = useContext(CartContext)

    const onAdd = (cantidad) => {

        setCant(cantidad)
        //console.log(cantidad);
        addToCart(item, cantidad)


        // Verifico si llego un solo producto o mas para escribir "Producto" o "Productos"
        if (cantidad > 1) {
            //console.log("Agregaste " + cantidad + " productos al carrito");
        } else{
            //console.log("Agregaste " + cantidad + " producto al carrito");
        }
    }

    const cantidad = cantidadDeProducto(item.id);


    return (
    <div className='detail'>
        <img src={item.img} alt={item.title} />
        <article>
            <h2>{item.title}</h2>
            <p>Lorem ipsum dolor sit, amet 
                consectetur adipisicing elit. Iure, minus?Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Reiciendis, numquam?</p>
            <h3>$ {item.price}</h3>



            <div>{cant === 0 ? <ItemCount stock={item.stock} initial={cantidad} onAdd={onAdd}/> : <Link to="/cart"><button>Ir al carrito</button></Link>}</div>

            {/* // {cant === 0 ?
            //     <div>
            //         <ItemCount stock={item.stock} initial={0} onAdd={onAdd}/>
            //     </div>
            // : <Link to="/cart"><button>Ir al carrito</button></Link>} */}
        </article>
        
    </div>
    )
}

export default ItemDetail

// JavaScript
// const foo = (cantidad) => {}

// foo(20) 
// El parametro lo recibo arriba donde dice cantidad