import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function CartCardPizza({pizza}){

  
  return (

    <Card className='tarjeta' style={{ width: '22rem' }}>
      <Card.Img className = "imagen" variant="top" src= {pizza.img} />
      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item> <div className='menuPrecio'><strong> Precio: ${pizza.price} </strong>  </div> </ListGroup.Item>
        <ListGroup.Item> <div className='menuPrecio'><strong> Cantidad: {pizza.cantidad} </strong>  </div> </ListGroup.Item>
     
      </ListGroup>
      
    </Card>
  );
}

export default CartCardPizza;