import React from 'react';
import Cards from './Cards';
import Card from './Card';

const CardList = () => {
  return (
    <div className=' CardSect3 d-flex justify-content-center' style={{
      margin:" 2cm 0cm"
    }} >
      { Card.map((items, index) => (
        <Cards key={index} {...items} />
      ))}
    </div>
  );
};

export default CardList;