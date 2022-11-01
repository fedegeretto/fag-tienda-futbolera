import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {
  return (
    <Link className='textnone' to={`/detail/${producto.id}`}>
      <div className='producto'>
        <img 
          src={producto.img} 
          alt={producto.title}/>
        <article>
          <h2>{producto.title}</h2>
          <h3>$ {producto.price}</h3>
        </article>
      </div>
    </Link>
  )
}

export default Item