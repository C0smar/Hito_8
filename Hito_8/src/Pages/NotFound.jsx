import React from 'react'
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div>
        <div className='cajaNotFound' >
            <img className='imgNotFound' src="pizza_triste.jpg" alt="pizza triste" />
            <h1> Página no encontrada </h1>
            <Link to= '/'> Volver atrás </Link>
        </div>
        
    </div>
  )
}


export default NotFound