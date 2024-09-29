import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';

const Pizza = () => {

  const { id } = useParams(); 
  const [pizzasApiUnic, setPizzasApiUnic] = useState();

  useEffect(() => {
    userFetch();
  }, [id]); 

  async function userFetch() {
    try {
      const response = await fetch(`http://localhost:5000/api/pizzas/${id}`); 
      const pizzasApiUnic = await response.json();

      console.log(pizzasApiUnic);
      setPizzasApiUnic(pizzasApiUnic);
    } catch (error) {
      
    }
  }

  if (!pizzasApiUnic) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="grilla">
        <CardPizza pizza={pizzasApiUnic} />
      </div>
    </div>
  );
};

export default Pizza;