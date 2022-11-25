import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { db } from '../../services/firebaseConfig';

const Form = () => {

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [orderId, setOrderId] = useState('')

    const {cart, totalPrecio, deleteAll} = useContext(CartContext)

    const enviarDatos = (e) => {
        e.preventDefault();

        const objOrden = {
            buyer: {
                name, 
                lastName, 
                telefono: 123456, 
                direccion: 'Luis Reinaudi 2232', 
                email: 'fede.geretto96@gmail.com'},
            items: cart,
            total: totalPrecio(),
            date: serverTimestamp()
        }

        const orderCollection = collection(db, 'orders')

        addDoc(orderCollection, objOrden)
            .then((res)=>{
                console.log(res.id);
                setOrderId(res.id);
                deleteAll();
        })
        .catch((error)=>{
            console.log(error);
        })

        
    }


    const handleName = (e) => setName(e.target.value);
    
    const handleLastName = (e) => setLastName(e.target.value)


    if (orderId) {
        return (
        <h1>Gracias por tu compra, tu número de compra es {orderId}</h1>
        )
    }

return (
    <div style={{padding: "100px"}}>
        <form action="" onSubmit={enviarDatos}>
            <input type="text" name="nombre" placeholder='Nombre' onChange={handleName} value={name}/>
            <input type="text" name="apellido" placeholder='Apellido' onChange={handleLastName} value={lastName}/>
            <button>Enviar</button>
        </form>
    </div>
)
}

export default Form
