import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import CardPizza from '../components/CardPizza'
import { MyContext } from '../Context';

const Home = () => {

  const { pizzasApi} = useContext(MyContext);  

  return (
    <div >
      <div>
        <Header/> 
      </div>
        <div className='grilla'>
        
           {pizzasApi.map((pizza,index) => <CardPizza  pizza ={pizza} index ={index} key={pizza.id}/>)}

        </div>
    </div>
  )
}

export default Home;