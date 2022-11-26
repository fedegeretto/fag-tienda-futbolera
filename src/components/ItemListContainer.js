import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import GridLoader from "react-spinners/GridLoader";
import { getDocs, query, where } from 'firebase/firestore';
import { collectionProd } from '../services/firebaseConfig';

const ItemListContainer = ({greeting}) => {

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const {categoryName} = useParams()

  useEffect(() => {
    const ref = categoryName ? query(collectionProd, where('category', '==', categoryName)) : collectionProd;
    getDocs(ref)
    .then((res)=>{
      const products = res.docs.map((prod)=>{
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
    <>
    <div className='bienvenidos'>
      <h2>{categoryName ? categoryName.toUpperCase() : greeting}</h2>
    </div>
    <div>
      <ItemList items={items}/>
    </div>  
    </>
  )
}

export default ItemListContainer