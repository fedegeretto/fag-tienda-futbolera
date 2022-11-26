import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { db } from '../../services/firebaseConfig';

const Form = () => {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [number, setNumber] = useState('')
    const [direccion, setDireccion] = useState('')
    const [emailUno, setEmailUno] = useState('')
    const [emailDos, setEmailDos] = useState('')
    const [orderId, setOrderId] = useState('')

    const {cart, totalPrecio, deleteAll} = useContext(CartContext)

    const enviarDatos = (e) => {
        e.preventDefault();
        const objOrden = {
            buyer: {
                name, 
                lastName, 
                number,
                direccion, 
                emailUno},
            items: cart,
            total: totalPrecio(),
            date: serverTimestamp()
        }

        const orderCollection = collection(db, 'orders')

        addDoc(orderCollection, objOrden)
            .then((res)=>{
                setOrderId(res.id);
                deleteAll();
        })
        .catch((error)=>{
            console.log(error);
        })  
    }

    const handleName = (e) => setName(e.target.value);   
    const handleLastName = (e) => setLastName(e.target.value)
    const handleNumber = (e) => setNumber(e.target.value)
    const handleDireccion = (e) => setDireccion(e.target.value)
    const handleEmailUno = (e) => setEmailUno(e.target.value)
    const handleEmailDos = (e) => setEmailDos(e.target.value)

    if (orderId) {
        return (
        <h1 className='containerForm'>Gracias por tu compra, tu número de compra es {orderId}</h1>
        )
    }

return (
    <div className='containerForm'>
        <h1>Completa el formulario para finalizar la compra</h1>
        <form action="" onSubmit={enviarDatos} className='formulario'>
            <input type="text" name="nombre" placeholder='Nombre' onChange={handleName} value={name}/>
            <input type="text" name="apellido" placeholder='Apellido' onChange={handleLastName} value={lastName}/>
            <input type="tel" name="number"placeholder='Teléfono' onChange={handleNumber} value={number}/>
            <input type="text" name="direccion" placeholder='Dirección' onChange={handleDireccion} value={direccion}/>
            <input type="email" name="emailUno" placeholder='Email' onChange={handleEmailUno} value={emailUno}/>
            <input type="email" name="emailDos" placeholder='Email' className={emailUno !== emailDos && 'bordeRojo'} onChange={handleEmailDos} value={emailDos}/>
            <button className='btnAgregar naranja' disabled={emailUno !== emailDos}>Enviar</button>
        </form>
    </div>
)
}

export default Form
