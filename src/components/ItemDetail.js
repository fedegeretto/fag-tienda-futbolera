import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {
    const onAdd = (cantidad) => {
        // Verifico si llego un solo producto o mas para escribir "Producto" o "Productos"
        if (cantidad > 1) {
            console.log("Agregaste " + cantidad + " productos al carrito");
        } else{
            console.log("Agregaste " + cantidad + " producto al carrito");
        }
    }
    return (
    <div>
        <img src={item.img} alt={item.title} />
        <div>
            <h2>{item.title}</h2>
            <p>Lorem ipsum dolor sit, amet 
                consectetur adipisicing elit. Iure, minus?Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Reiciendis, numquam?</p>
            <h3>$ {item.price}</h3>
            <ItemCount stock={item.stock} initial={0} onAdd={onAdd}/>
        </div>
    </div>
    )
}

export default ItemDetail