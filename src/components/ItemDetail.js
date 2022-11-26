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

        addToCart(item, cantidad)
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
            <div>{cant === 0 ? <ItemCount stock={item.stock} initial={cantidad} onAdd={onAdd}/> : <Link to="/cart"><button className='btnAgregar'>Ir al carrito</button></Link>}</div>
        </article>       
    </div>
    )
}

export default ItemDetail