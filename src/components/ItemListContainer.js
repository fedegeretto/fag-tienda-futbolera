import React, { useEffect, useState } from 'react'
// import { products } from '../mock/products'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import GridLoader from "react-spinners/GridLoader";
import { getDocs, query, where } from 'firebase/firestore';
import { collectionProd } from '../services/firebaseConfig';


// Clase 11 - Continuar en 28:10

const ItemListContainer = ({greeting}) => {

  const [items, setItems] = useState([])

  const [loading, setLoading] = useState(true)

  const {categoryName} = useParams()

  useEffect(() => {
    

    const ref = categoryName ? query(collectionProd, where('category', '==', categoryName)) : collectionProd;

    getDocs(ref)
    .then((res)=>{
      console.log(res.docs);
      const products = res.docs.map((prod)=>{
        console.log(prod);
        console.log(prod.data());
        return {
          id: prod.id,
          ...prod.data()
        }
      })
      setItems(products)
    })
    .catch((error)=>{
      console.log(error);
    })
    .finally(()=>{
      setLoading(false);
    })

  return () => setLoading(true)

  }, [categoryName])


  if (loading) {
    return (
      <div className='cargando'>
        <GridLoader color='#FF7A00' size={25} />
      </div>  
    )
  }

  return (
    <div>
      <h2 className='bienvenidos'>{greeting}</h2>
      <ItemList items={items}/>
    </div>  
    
  )
}

export default ItemListContainer