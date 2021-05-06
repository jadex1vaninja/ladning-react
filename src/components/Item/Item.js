import React from 'react';
import './Item.scss';

const Item = ({ id, name }) => {
  return (
    <div className='item'>
      <div className='item__name'>
        <h2>{name}</h2>
      </div>
      <div className='item__description'>
        <p>{id}</p>
      </div>
    </div>
  );
};

export default Item;
