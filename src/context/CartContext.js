import { useState, createContext } from 'react';

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);


    //funciones
    const addToCart = (item, cantidad) => {
        //SPREAD --> ...item --> id: 1, title: 'Camisa', price: 200
        //console.log({ ...item, cantidad });
        if (isInCart(item.id)) {
            //sumo la cantidad
            sumarCantidad(item, cantidad)
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
    };

    //funcion para ver si está en el carrito
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    };

    // Función para sumar la cantidad de un mismo producto
    const sumarCantidad = (itemPorAgregar, cantidad) => {
        const cartActualizado = cart.map((prodDelCarrito) => {
            if (itemPorAgregar.id === prodDelCarrito.id) {
                const productoActualizado = {
                    ...prodDelCarrito,
                    cantidad
                    //cantidad
                };
                return productoActualizado;
            } else {
                return prodDelCarrito;
            }
        });
        setCart(cartActualizado);
    };

    // Función para vaciar el carrito

    const deleteAll = () => {
        setCart([])
    }

    // Función para eliminar un solo producto

    const deleteOne = (id) => {
        const prodFiltrados = cart.filter((prod) => prod.id !== id)
        setCart(prodFiltrados)
    }

    // Función para sumar el total $ del carrito
    const totalPrecio = () => {
        return cart.reduce((total, item) => total + item.cantidad * item.price, 0)
    };

    // Función para sumar unidades totales del carrito (CartWidget)
    
    const totalUnidades = () => {
        let count = 0
        const copia = [...cart]
        copia.forEach((prod) => {
            count = count + prod.cantidad
        })
        return count
    }

    // Función para obtener la Cantidad del Producto
    const cantidadDeProducto = (id) => {
        const product = cart.find((prod) => prod.id === id);
        return product?.cantidad;
    };


    console.log(cart);

    return (
        <CartContext.Provider value={{ cart, addToCart, deleteAll, deleteOne, totalUnidades, totalPrecio, cantidadDeProducto }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;
