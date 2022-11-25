import React, { useEffect, useState } from 'react'
// import { products } from '../mock/products'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { doc, getDoc } from 'firebase/firestore';
import { collectionProd } from '../services/firebaseConfig';



const ItemDetailContainer = () => {

  const [item, setItem] = useState([])

  const [loading, setLoading] = useState(true)

  const {idProd} = useParams()

  useEffect(() => {

    const ref = doc(collectionProd, idProd)

    getDoc(ref)
    .then((res)=>{
      console.log(res);
      setItem({
        id: res.id,
        ...res.data()
      })
    })
    .catch((error)=>{
      console.log(error);
    })
    .finally(()=>{
      setLoading(false)
    })



  //   const getProduct = () => {

  //     return new Promise((res,rej) => {
  //       const product = products.find((prod) => prod.id === parseInt(idProd))
        
  //       setTimeout(() => {
  //             res(product);
  //         }, 2000);
  //     })
  // }
    // getProduct()
    //   .then((res) => {
    //     setItem(res)
    //     //console.log("res", res);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })
    //   .finally(() => {
    //     setLoading(false)
    //   })
  }, [idProd])

  if (loading) {
    return (
    <div className='detailContainer'>
      <h1>Cargando...</h1>
    </div> ) 
  }

  return (
    <div className='detailContainer'>
      <ItemDetail item={item}/> 
    </div>  
    
  )
}

export default ItemDetailContainer