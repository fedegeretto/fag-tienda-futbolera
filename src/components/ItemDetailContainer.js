import React, { useEffect, useState } from 'react'
import { products } from '../mock/products'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';



const ItemDetailContainer = () => {

  const [item, setItem] = useState([])

  const {idProd} = useParams()

  useEffect(() => {
    const getProduct = () => {

      return new Promise((res,rej) => {
        const product = products.find((prod) => prod.id === parseInt(idProd))
        
        setTimeout(() => {
              res(product);
          }, 2000);
      })
  }
    getProduct()
      .then((res) => {
        setItem(res)
        console.log("res", res);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [idProd])

  return (
    <div>
      
      <ItemDetail item={item}/>
    </div>  
    
  )
}

export default ItemDetailContainer