import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import React, { useContext } from 'react';
import { MyContext } from '../Context';
import { Link } from 'react-router-dom'; 

function CardPizza({ pizza, index }) { 

  const { incrementarCantidad } = useContext(MyContext);  

  return (
    <Card className='tarjeta' style={{ width: '22rem' }}>
      <Card.Img className="imagen" variant="top" src={pizza.img} />
      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title>
        <Card.Text className='tarjetaTexto'>
          Ingredientes 🍕:
          <ul>
            {pizza.ingredients.map((ingredient, index) => ( 
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <div className='menuPrecio'><strong>Precio: ${pizza.price}</strong></div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className='menuBotones'>
            <Link to={`/pizza/${pizza.id}`}>
              <button className='botonVerMas'>Ver Más 👀</button>
            </Link>
            <button className='botonAñadir' onClick={() => incrementarCantidad(index)}>Añadir 🛒</button>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default CardPizza;