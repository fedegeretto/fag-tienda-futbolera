import React, { useEffect, useState } from 'react'
import { products } from '../mock/products'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';



const ItemListContainer = ({greeting}) => {

  const [items, setItems] = useState([])

  const {categoryName} = useParams()

  useEffect(() => {
    const getProducts = () => {

      return new Promise((res,rej) => {
        const prodFiltrados = products.filter((prod) => prod.category === categoryName)
        const referenciaProductos = categoryName ? prodFiltrados : products;  
        
        setTimeout(() => {
              res(referenciaProductos);
          }, 2000);
      })
  }
    getProducts()
      .then((res) => {
        setItems(res)
        console.log("res", res);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [categoryName])

  return (
    <div>
      <h2 className='bienvenidos'>{greeting}</h2>
      <ItemList items={items}/>
    </div>  
    
  )
}

export default ItemListContainer