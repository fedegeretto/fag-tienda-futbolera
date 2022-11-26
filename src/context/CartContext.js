import { useState, createContext } from 'react';

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            sumarCantidad(item, cantidad)
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
    };

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    };

    const sumarCantidad = (itemPorAgregar, cantidad) => {
        const cartActualizado = cart.map((prodDelCarrito) => {
            if (itemPorAgregar.id === prodDelCarrito.id) {
                const productoActualizado = {
                    ...prodDelCarrito,
                    cantidad
                };
                return productoActualizado;
            } else {
                return prodDelCarrito;
            }
        });
        setCart(cartActualizado);
    };

    const deleteAll = () => {
        setCart([])
    }

    const deleteOne = (id) => {
        const prodFiltrados = cart.filter((prod) => prod.id !== id)
        setCart(prodFiltrados)
    }

    const totalPrecio = () => {
        return cart.reduce((total, item) => total + item.cantidad * item.price, 0)
    };

    const totalUnidades = () => {
        let count = 0
        const copia = [...cart]
        copia.forEach((prod) => {
            count = count + prod.cantidad
        })
        return count
    }

    const cantidadDeProducto = (id) => {
        const product = cart.find((prod) => prod.id === id);
        return product?.cantidad;
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, deleteAll, deleteOne, totalUnidades, totalPrecio, cantidadDeProducto }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;
